import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";

import { setModal } from "../redux/reducers/modal/modal.slice";
import {
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
} from "./reducers/persons/persons.slice";
export { useAppSelector, useAppDispatch };

export {
  setModal,
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
};
