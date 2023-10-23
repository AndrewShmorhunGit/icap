"use client";
import { TPerson } from "@/types";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import styles from "@/styles/modules/table.module.scss";
import { formatDate, getAge } from "@/utils/format";
import { ScrollContainer } from "./containers/ScrollContainer";
import { useState } from "react";
import { Pagination } from "./pagination/Pagination";
import { ImArrowUp2, ImArrowDown2 } from "react-icons/im";
export const Table = ({ persons }: { persons: TPerson[] }) => {
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

  const itemsPerPage = 10;
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
    // If it's a new column or if the direction was "desc", reset to "asc"
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
        <p>Press to add new person:</p>
        <button className={styles["btn-add"]}>Add New</button>
        <p>Press to remove filters:</p>
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
            {currentPersons.map((item) => (
              <tr key={item.id}>
                <td style={{ maxWidth: "1rem" }}>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{formatDate(item.birthday_date)}</td>
                <td>{item.phone_number}</td>
                <td
                  style={{ maxWidth: "10rem" }}
                  className={styles["address-hover"]}
                >
                  {item.address.split("\n")[0]}...
                  <span className={styles["address-tooltip"]}>
                    {item.address}
                  </span>
                </td>
                <td style={{ maxWidth: "6rem" }}>
                  <button className={styles["btn-action"]}>
                    <AiFillEdit />
                  </button>
                  <button
                    className={styles["btn-action"]}
                    style={{ marginLeft: "10px" }}
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
