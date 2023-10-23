"use client";
import { TPerson } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
  value: string;
  data: number | TPerson | null;
} = {
  value: "none",
  data: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (
      state,
      action: PayloadAction<{
        value: string;
        data: number | TPerson | null;
      }>
    ) => {
      state.value = action.payload.value;
      state.data = action.payload.data;
    },
  },
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;
