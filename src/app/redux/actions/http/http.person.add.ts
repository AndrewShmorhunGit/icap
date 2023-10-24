"use client";
import { addPersonStart, addPersonSuccess, addPersonError } from "@/app/redux";
import { AppDispatch } from "../../store";
import { TPerson } from "@/types";

export const httpAddPersonPOST = (newPersonData: Omit<TPerson, "id">) => {
  return async (dispatch: AppDispatch) => {
    dispatch(addPersonStart());
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPersonData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Could not add person.");
      }

      const data: TPerson = await response.json();
      dispatch(addPersonSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(addPersonError("Adding person failed!"));
    }
  };
};
