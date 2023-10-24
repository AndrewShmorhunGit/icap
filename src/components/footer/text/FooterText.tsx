import { content, year } from "@/data/static";

export function FooterText() {
  return <p> &copy; {content + " " + year}</p>;
}
