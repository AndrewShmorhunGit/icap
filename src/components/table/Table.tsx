"use client";
import { TPerson } from "@/types";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import styles from "@/styles/modules/table.module.scss";
import { formatDate } from "@/utils/format";
import { ScrollContainer } from "./containers/ScrollContainer";
import { useState } from "react";
import { Pagination } from "./pagination/Pagination";
import { ImArrowUp2, ImArrowDown2 } from "react-icons/im";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setPersons, setModal } from "@/app/redux";

export const Table = ({ persons }: { persons: TPerson[] }) => {
  const dispatch = useAppDispatch();
  dispatch(setPersons(persons));
  const [currentPage, setCurrentPage] = useState(1);

  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null
  );

  const [sortedColumn, setSortedColumn] = useState<"name" | null>(null);

  const sortByName = (a: TPerson, b: TPerson) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return sortDirection === "asc" ? -1 : 1;
    if (nameA > nameB) return sortDirection === "asc" ? 1 : -1;
    return 0;
  };

  const [itemsPerPage, setItemsPerPage] = useState(10);

  const incrementItemsPerPage = () => {
    setItemsPerPage((prev) => Math.min(prev + 1, persons.length));
  };

  const decrementItemsPerPage = () => {
    setItemsPerPage((prev) => Math.max(prev - 1, 1));
  };

  const totalPages = Math.ceil(persons.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  let sortedPersons = [...persons];

  if (sortedColumn === "name") sortedPersons.sort(sortByName);

  const currentPersons = sortedPersons.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const removeFilters = () => {
    if (!sortDirection && !sortedColumn) return;
    setSortedColumn(null);
    setSortDirection(null);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleSort = (column: "name") => {
    if (sortedColumn !== column || sortDirection === "desc") {
      setSortDirection("asc");
    } else {
      setSortDirection("desc");
    }
    setSortedColumn(column);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          textAlign: "center",
          fontSize: "1.4rem",
          padding: "1rem 0",
        }}
      >
        <p>Add new person:</p>
        <button
          className={styles["btn-add"]}
          onClick={() => dispatch(setModal({ value: "add", data: null }))}
        >
          Add New
        </button>
        <p>Items per page:</p>
        <button onClick={decrementItemsPerPage} className={styles["btn-add"]}>
          -
        </button>
        <span>{itemsPerPage}</span>
        <button onClick={incrementItemsPerPage} className={styles["btn-add"]}>
          +
        </button>
        <p>
          Remove <span style={{ fontWeight: "bold" }}>Name</span> filters:
        </p>
        <button className={styles["btn-add"]} onClick={removeFilters}>
          Remove Filters
        </button>
      </div>
      <ScrollContainer>
        <table className={styles["table-container"]}>
          <thead>
            <tr>
              <th>ID</th>
              <th
                style={{ cursor: "pointer" }}
                onClick={() => handleSort("name")}
              >
                {!sortDirection ? (
                  "Name"
                ) : sortDirection === "desc" ? (
                  <div style={{ display: "flex", gap: "2rem" }}>
                    Name <ImArrowUp2 />
                  </div>
                ) : (
                  <div style={{ display: "flex", gap: "2rem" }}>
                    Name <ImArrowDown2 />
                  </div>
                )}
              </th>
              <th>Email</th>
              <th>Birthday</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentPersons.map((person) => (
              <tr key={person.id}>
                <td style={{ maxWidth: "1rem" }}>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{formatDate(person.birthday_date)}</td>
                <td>{person.phone_number}</td>
                <td
                  style={{ maxWidth: "10rem" }}
                  className={styles["address-hover"]}
                >
                  {person.address.split("\n")[0]}...
                  <span className={styles["address-tooltip"]}>
                    {person.address}
                  </span>
                </td>
                <td style={{ maxWidth: "6rem" }}>
                  <button
                    className={styles["btn-action"]}
                    onClick={() =>
                      dispatch(setModal({ value: "edit", data: person }))
                    }
                  >
                    <AiFillEdit />
                  </button>
                  <button
                    className={styles["btn-action"]}
                    style={{ marginLeft: "10px" }}
                    onClick={() =>
                      dispatch(setModal({ value: "delete", data: person.id }))
                    }
                  >
                    <AiOutlineDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
