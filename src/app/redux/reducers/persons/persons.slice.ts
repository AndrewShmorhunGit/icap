"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPerson } from "@/types";

type PersonsState = {
  persons: TPerson[];
  loading: boolean;
  error: string | null;
};

const initialState: PersonsState = {
  persons: [],
  loading: false,
  error: null,
};

export const personsSlice = createSlice({
  name: "persons",
  initialState,
  reducers: {
    setPersons: (state, action: PayloadAction<TPerson[]>) => {
      state.persons = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setPersons, setLoading, setError } = personsSlice.actions;

export default personsSlice.reducer;
