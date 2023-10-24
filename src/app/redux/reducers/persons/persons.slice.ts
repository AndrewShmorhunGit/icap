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
    deletePersonStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deletePersonSuccess: (state, action: PayloadAction<number>) => {
      state.loading = false;
      state.persons = state.persons.filter(
        (person) => person.id !== action.payload
      );
    },
    deletePersonError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setPersons: (state, action: PayloadAction<TPerson[]>) => {
      state.persons = action.payload;
    },
  },
});

export const {
  setPersons,
  deletePersonStart,
  deletePersonSuccess,
  deletePersonError,
} = personsSlice.actions;

export default personsSlice.reducer;
