function appleStandaloneWebApp(): boolean {
  const nav = window.navigator as Navigator & { standalone?: boolean };
  if (nav.standalone === true) return true;
  const ios = /iPhone|iPad|iPod/.test(nav.userAgent);
  return ios && window.matchMedia("(display-mode: standalone)").matches;
}

export function installedWebAppPath(): string | null {
  if (!appleStandaloneWebApp()) return null;
  return window.location.pathname + window.location.search;
}

// iOS opens a Safari sheet when a home-screen web app changes its path, which
// happens when the card at /card navigates to home at /. Keep the installed URL.
const installedPath = installedWebAppPath();
if (installedPath) {
  const keepInstalledUrl = (url?: string | URL | null) => {
    if (url == null || url === "") return url;
    const next = new URL(String(url), window.location.href);
    if (next.origin !== window.location.origin) return url;
    if (next.pathname + next.search === installedPath) return url;
    return installedPath + next.hash;
  };

  const pushState = history.pushState.bind(history);
  const replaceState = history.replaceState.bind(history);
  history.pushState = (data, unused, url) => {
    pushState(data, unused, keepInstalledUrl(url));
  };
  history.replaceState = (data, unused, url) => {
    replaceState(data, unused, keepInstalledUrl(url));
  };
}
