import "@/styles/globals.scss";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Modal } from "../modal/Modal";

const inter = Inter({ subsets: ["latin"] });

export function AppContainer({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="no-touch">
      <body className={inter.className}>
        <Modal />
        {children}
      </body>
    </html>
  );
}
