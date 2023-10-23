import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "lightgrey",
      }}
    >
      {children}
    </div>
  );
}
