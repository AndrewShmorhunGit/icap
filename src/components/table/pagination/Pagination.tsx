import { TPaginationProps } from "@/types";
import styles from "@/styles/modules/pagination.module.scss";

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: TPaginationProps) {
  return (
    <div className={styles["pagination-container"]}>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}
