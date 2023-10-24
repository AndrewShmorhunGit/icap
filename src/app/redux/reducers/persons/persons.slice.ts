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
    addPersonStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addPersonSuccess: (state, action: PayloadAction<TPerson>) => {
      state.loading = false;
      state.persons.push(action.payload);
    },
    addPersonError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
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
    editPersonStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    editPersonSuccess: (state, action: PayloadAction<TPerson>) => {
      state.loading = false;
      const index = state.persons.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.persons[index] = action.payload;
      }
    },
    editPersonError: (state, action: PayloadAction<string>) => {
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
  editPersonStart,
  editPersonSuccess,
  editPersonError,
  addPersonStart,
  addPersonSuccess,
  addPersonError,
} = personsSlice.actions;

export default personsSlice.reducer;
