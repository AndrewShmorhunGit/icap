"use client";
import { setModal, useAppDispatch, useAppSelector } from "@/app/redux";
import { RootState } from "@/app/redux/store";
import { useClickOutside } from "@/hooks/useClickOutside";
import { palette } from "@/styles/palette";
import React from "react";
import { ModalForm } from "../form/ModalForm";
import { TPerson } from "@/types";
import { ModalDeletePerson } from "../delete/ModalDeletePerson";
import { useTheme } from "@/hooks/useTheme";

export function ModalContent() {
  const refClickOutside = React.useRef<HTMLDivElement | null>(null);
  const { data, value } = useAppSelector((state: RootState) => state.modal);
  const dispatch = useAppDispatch();
  useClickOutside(refClickOutside, () =>
    dispatch(setModal({ value: "none", data: null }))
  );
  const { isLightTheme } = useTheme();
  return (
    <div
      ref={refClickOutside}
      style={{
        minWidth: "42rem",
        height: "auto",
        background: isLightTheme ? palette.bg : palette.dark.bg,
        padding: "2.4rem 2.4rem",
        cursor: "auto",
        position: "relative",
        borderRadius: "1.2rem",
      }}
    >
      {value === "delete" && <ModalDeletePerson personId={data as number} />}

      {value === "add" && data === null && <ModalForm />}
      {value === "edit" && data !== null && (
        <ModalForm initialData={data as TPerson} />
      )}
    </div>
  );
}
