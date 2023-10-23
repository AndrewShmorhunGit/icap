import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";
export function AppProviders({ children }: { children: ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
