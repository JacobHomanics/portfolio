import { EnvelopeIcon } from "@phosphor-icons/react/dist/csr/Envelope";
import { GithubLogoIcon } from "@phosphor-icons/react/dist/csr/GithubLogo";
import { LinkedinLogoIcon } from "@phosphor-icons/react/dist/csr/LinkedinLogo";
import { TelegramLogoIcon } from "@phosphor-icons/react/dist/csr/TelegramLogo";
import { XLogoIcon } from "@phosphor-icons/react/dist/csr/XLogo";
import type { Icon } from "@phosphor-icons/react/dist/lib/types";

export const IconsLinksData: { url: string; icon: Icon; label: string }[] = [
  { url: "https://github.com/jacobhomanics", icon: GithubLogoIcon, label: "GitHub" },
  { url: "https://linkedin.com/in/jacobhomanics", icon: LinkedinLogoIcon, label: "LinkedIn" },
  { url: "https://x.com/jacobhomanics", icon: XLogoIcon, label: "X" },
  { url: "mailto:homanicsjake@gmail.com", icon: EnvelopeIcon, label: "Email" },
  { url: "https://t.me/jacobhomanics", icon: TelegramLogoIcon, label: "Telegram" },
];
