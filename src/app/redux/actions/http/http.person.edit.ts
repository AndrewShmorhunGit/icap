"use client";
import {
  editPersonStart,
  editPersonSuccess,
  editPersonError,
} from "@/app/redux";
import { AppDispatch } from "../../store";
import { TPerson } from "@/types";

export const httpEditPersonPOST = (
  personId: number,
  updatedPersonData: TPerson
) => {
  return async (dispatch: AppDispatch) => {
    dispatch(editPersonStart());
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${personId}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPersonData),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Could not edit person.");
      }
      const data: TPerson = await response.json();
      dispatch(editPersonSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(editPersonError("Editing failed!"));
    }
  };
};
