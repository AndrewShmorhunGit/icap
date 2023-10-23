"use client";
import { useEffect, useState } from "react";

export function useClocks() {
  const getTime = () => new Date().toLocaleTimeString().slice(0, -3);
  const time = getTime();
  const [isTime, setTime] = useState(time);

  const updateTime = () => {
    let time = getTime();
    setTime(time);
  };
  useEffect(() => {
    setInterval(updateTime, 1000);
  });

  return { time: isTime };
}
