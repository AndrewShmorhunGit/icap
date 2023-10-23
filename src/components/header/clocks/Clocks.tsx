"use client";
import { useClocks } from "@/hooks/useClocks";

export function Clocks() {
  const { time } = useClocks();
  return <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{time}</div>;
}
