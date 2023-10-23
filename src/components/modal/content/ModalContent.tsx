"use client";
import { setModal, useAppDispatch, useAppSelector } from "@/app/redux";
import { RootState } from "@/app/redux/store";
import { useClickOutside } from "@/hooks/useClickOutside";
import { palette } from "@/styles/palette";
import React from "react";
import { ModalForm } from "../form/ModalForm";
import { TPerson } from "@/types";
import { ModalDeletePerson } from "../delete/ModalDeletePerson";

export function ModalContent() {
  const refClickOutside = React.useRef<HTMLDivElement | null>(null);
  const isModal = useAppSelector((state: RootState) => state.modal);
  const dispatch = useAppDispatch();
  useClickOutside(refClickOutside, () =>
    dispatch(setModal({ value: "none", data: null }))
  );
  return (
    <div
      ref={refClickOutside}
      style={{
        width: "80rem",
        height: "auto",
        background: palette.bg,
        cursor: "auto",
        transform: "translate(0, -5rem)",
        position: "relative",
      }}
    >
      {isModal.value === "delete" && isModal.data !== null && (
        <ModalDeletePerson personId={isModal.data as number} />
      )}
      {(isModal.value === "add" || isModal.value === "edit") &&
      isModal.data !== null ? (
        <ModalForm initialData={isModal.data as TPerson} />
      ) : (
        <ModalForm />
      )}
    </div>
  );
}
