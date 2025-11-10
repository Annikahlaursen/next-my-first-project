import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hej Verden</h1>
        <h2>Mit navn er Annika</h2>
      </main>
    </div>
  );
}
