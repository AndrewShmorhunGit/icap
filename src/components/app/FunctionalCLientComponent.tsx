"use client";

// import { setPersons } from "@/app/redux";
// import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { TPerson } from "@/types";
import { redirect } from "next/navigation";

export const FunctionalClientComponent = ({ data }: { data: TPerson[] }) => {
  () => useLocalStorageState<TPerson[]>("table", data);
  redirect("/table");
};
