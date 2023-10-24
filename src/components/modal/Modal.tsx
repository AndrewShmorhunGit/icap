"use client";
import { useAppSelector } from "@/app/redux";
import { ModalBackground } from "./container/ModalBackground";
import { ModalContent } from "./content/ModalContent";

export function Modal() {
  const { value } = useAppSelector((state) => state.modal);
  const isModalActive = value !== "none";
  if (isModalActive)
    return (
      <ModalBackground>
        <ModalContent />
      </ModalBackground>
    );
}
