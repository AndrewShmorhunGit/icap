import { ReactNode } from "react";
import styles from "@/styles/modules/header.module.scss";
export function HeaderContainer({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
