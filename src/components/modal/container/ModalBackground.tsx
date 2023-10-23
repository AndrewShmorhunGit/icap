"use client";

import { useAppSelector } from "@/app/redux";

export function ModalBackground({ children }: { children: React.ReactNode }) {
  const { value } = useAppSelector((state) => state.modal);
  const isModalActive = value !== "none";
  return (
    <div
      className="center"
      style={{
        position: "fixed",
        height: "100%",
        minWidth: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        cursor: "pointer",
        zIndex: isModalActive ? 99 : -1,
      }}
    >
      {children}
    </div>
  );
}
