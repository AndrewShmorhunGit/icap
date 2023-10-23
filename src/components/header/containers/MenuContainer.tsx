import { ReactNode } from "react";
export function MenuContainer({ children }: { children: ReactNode }) {
  return (
    <div className="center" style={{ gap: "2rem", width: "28rem" }}>
      {children}
    </div>
  );
}
