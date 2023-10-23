import { MenuContainer } from "@/components/header/containers/MenuContainer";
import { ThemeButton } from "../buttons/ThemeButton";
import { Time } from "../clocks/Time";
import { UserButton } from "@clerk/nextjs";

export function Menu() {
  return (
    <MenuContainer>
      <UserButton afterSignOutUrl="/" />
      <ThemeButton />
      <Time />
    </MenuContainer>
  );
}
