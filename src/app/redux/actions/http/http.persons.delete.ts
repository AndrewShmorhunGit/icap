"use client";
import {
  deletePersonError,
  deletePersonStart,
  deletePersonSuccess,
} from "@/app/redux";
import { AppDispatch } from "../../store";

export const httpPersonDELETE = (personId: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(deletePersonStart());
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${personId}/`,
        {
          method: "DELETE",
          // mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Could not delete person.");
      }
      dispatch(deletePersonSuccess(personId));
    } catch (error) {
      console.log(error);
      dispatch(deletePersonError("Deleting is failed!"));
    }
  };
};
