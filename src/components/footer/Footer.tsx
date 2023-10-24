import { FooterContainer } from "./containers/FooterContainer";
import { FooterLinks } from "./links/FooterLinks";
import { FooterText } from "./text/FooterText";

export function Footer() {
  return (
    <FooterContainer>
      <FooterLinks />
      <FooterText />
    </FooterContainer>
  );
}
