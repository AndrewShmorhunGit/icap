import { ReactNode } from "react";
export function ScrollContainer({ children }: { children: ReactNode }) {
  return (
    <div
      className="scroll-bar"
      style={{
        display: "flex",
        height: "calc(100vh - 32rem)",
        margin: "2rem 0",
        overflowY: "auto",
        paddingRight: "5px",
      }}
    >
      {children}
    </div>
  );
}
