import Provider from "@/app/redux/provider";
import { ThemeContextProvider } from "@/providers/theme.context";
import { ClerkProvider } from "@clerk/nextjs";
import { ReactNode } from "react";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <Provider>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </Provider>
    </ClerkProvider>
  );
}
