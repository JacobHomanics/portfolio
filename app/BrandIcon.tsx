import { brandIcons } from "./brand-icons";

/** A decorative brand mark. The tool's name is always written out next to it as text. */
export default function BrandIcon({ name, size = 18 }: { name: keyof typeof brandIcons; size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="brand-icon"
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: brandIcons[name] }}
    />
  );
}
