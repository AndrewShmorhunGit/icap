import { ReactNode } from "react";

export function FooterContainer({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        padding: "0.5rem",
        display: "flex",
        gap: "0.5rem",
        margin: "0 4rem",
        position: "sticky",
        bottom: "0",
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center",
        borderTop: "1px solid #6c757d",
      }}
    >
      {children}
    </div>
  );
}
