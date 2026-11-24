"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../assets/images/logo.svg";

const links = [
  { href: "/", label: "Home" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function TopNav() {
  const pathname = usePathname();
  return (
    <nav className="topnav" aria-label="Primary">
      <Link href="/" className="topnav-brand">
        <Image src={logo} alt="" width={28} height={28} priority />
        <span>Jacob Homanics</span>
      </Link>
      <div className="topnav-links">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
            className="topnav-link"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
