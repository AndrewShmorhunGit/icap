"use client";
import { useState } from "react";

import styles from "@/styles/modules/modal.module.scss";
import { TPerson } from "@/types";
import { setModal, useAppDispatch, useAppSelector } from "@/app/redux";
import { getPersonNameById } from "@/utils/functions";

type ModalDeletePersonProps = {
  personId: number;
};

export const ModalDeletePerson: React.FC<ModalDeletePersonProps> = ({
  personId,
}) => {
  const { persons } = useAppSelector((state) => state.persons);
  const personName = getPersonNameById(personId, persons);
  const dispatch = useAppDispatch();
  const [inputName, setInputName] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };

  const handleDelete = () => {
    // Dispatch action to delete person
    // ...

    // Close the modal after deletion
    dispatch(setModal({ value: "none", data: null }));
  };

  return (
    <div className={styles.modal}>
      <h2>Confirm Deletion</h2>
      <p>
        Please type <strong>{personName}</strong> to confirm deletion. This
        action cannot be undone.
      </p>
      <input
        type="text"
        value={inputName}
        onChange={handleInputChange}
        placeholder={`Type ${personName} to confirm`}
      />
      <div className={styles.modalActions}>
        <button
          onClick={handleDelete}
          disabled={inputName !== personName}
          className={inputName === personName ? styles.confirmButton : ""}
        >
          Delete
        </button>
        <button
          onClick={() => dispatch(setModal({ value: "none", data: null }))}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
