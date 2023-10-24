import { Tasks } from "@/components/lib/Accordion";
import styles from "@/styles/modules/home.module.scss";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  const href = userId ? "/table" : "/auth";
  return (
    <div className={styles.container} style={{ height: "100vh" }}>
      <div className={styles.main}>
        <h1 className={styles.title}>Welcome to the App!</h1>
        <Tasks />
        <Link href={href}>
          <button className={styles.getStartedButton}>Start</button>
        </Link>
      </div>
    </div>
  );
}
