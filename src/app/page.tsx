import styles from "@/styles/modules/home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Demo App!</h1>
        <button className={styles.getStartedButton}>Get Started</button>
      </main>
    </div>
  );
}
