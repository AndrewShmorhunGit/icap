import { ReactNode } from "react";
export function PageContainer({ children }: { children: ReactNode }) {
  return <div style={{ padding: "2rem 4rem" }}>{children}</div>;
}
