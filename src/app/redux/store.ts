"use client";
import modalReducer from "@/app/redux/reducers/modal/modal.slice";
import personsReducer from "@/app/redux/reducers/persons/persons.slice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  modal: modalReducer,
  persons: personsReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
