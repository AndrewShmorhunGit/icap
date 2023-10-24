import { links } from "@/data/static";
import Link from "next/link";

export function FooterLinks() {
  return (
    <div style={{ display: "flex", gap: "1.6rem" }}>
      {links.map(({ icon, link }) => {
        return (
          <Link
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </Link>
        );
      })}
    </div>
  );
}
