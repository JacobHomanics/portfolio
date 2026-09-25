const KEY = "project-nav-stack";

function read(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const parsed = JSON.parse(sessionStorage.getItem(KEY) ?? "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(item => typeof item === "string" && item.startsWith("/"));
  } catch {
    return [];
  }
}

function write(stack: string[]) {
  sessionStorage.setItem(KEY, JSON.stringify(stack));
}

export function pushProjectOrigin(origin: string | null) {
  if (!origin?.startsWith("/")) return;
  const stack = read();
  if (stack[stack.length - 1] === origin) return;
  stack.push(origin);
  write(stack);
}

export function peekProjectOrigin() {
  const stack = read();
  return stack[stack.length - 1];
}

export function popProjectOrigin() {
  const stack = read();
  const origin = stack.pop();
  write(stack);
  return origin;
}
