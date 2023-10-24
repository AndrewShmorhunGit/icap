"use client";
import { useRef } from "react";

import styles from "@/styles/modules/modal.module.scss";
import { TPerson } from "@/types";
import { setModal, useAppDispatch } from "@/app/redux";

type FormModalProps = {
  initialData?: TPerson;
};

const form = styles["modal-form"];
export const ModalForm: React.FC<FormModalProps> = ({ initialData }) => {
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Create a FormData object from the form
    if (formRef.current) {
      const formData = new FormData(formRef.current);

      // To see the values:
      // for (let pair of formData.entries()) {
      //   console.log(pair[0]+ ', ' + pair[1]);
      // }

      // Dispatch an action with the formData or send it to the server
      // For now, we'll just close the modal
      dispatch(setModal({ value: "none", data: null }));
    }
  };

  return (
    <div className={form}>
      <h2>{initialData ? "Update Person" : "Add New Person"}</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            defaultValue={initialData?.name || ""}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            defaultValue={initialData?.email || ""}
            required
          />
        </label>
        <label>
          Birthday Date:
          <input
            type="text"
            name="birthday"
            defaultValue={initialData?.birthday_date || "31-12-99"}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="phone"
            name="phone"
            defaultValue={initialData?.phone_number || "+380"}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            defaultValue={initialData?.address || ""}
            required
          />
        </label>
        <button type="submit">{initialData ? "Update" : "Add"}</button>
        <button
          onClick={() => dispatch(setModal({ value: "none", data: null }))}
        >
          Close
        </button>
      </form>
    </div>
  );
};
