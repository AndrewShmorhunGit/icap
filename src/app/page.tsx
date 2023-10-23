import styles from "@/styles/modules/home.module.scss";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();
  const href = userId ? "/table" : "/auth";
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}>Welcome to the Demo App!</h1>
        <Link href={href}>
          <button className={styles.getStartedButton}>Get Started</button>
        </Link>
      </div>
    </div>
  );
}
