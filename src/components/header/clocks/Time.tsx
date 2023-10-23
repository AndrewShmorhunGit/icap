import { palette } from "@/styles/palette";
import { Clocks } from "./Clocks";
import { LuClock3 } from "react-icons/lu";

export function Time() {
  return (
    <div style={{ gap: "1.2rem" }} className="space-between">
      <LuClock3 color={palette.main} size={18} />
      <Clocks />
    </div>
  );
}
