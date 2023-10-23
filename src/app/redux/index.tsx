import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";

import { setModal } from "../redux/reducers/modal/modal.slice";
import { setPersons } from "./reducers/persons/persons.slice";
export { useAppSelector, useAppDispatch };

export { setModal, setPersons };
