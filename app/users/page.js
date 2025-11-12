import Link from "next/link";
import styles from "../page.module.css";

export default function Users() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Users Page</h1>
        <section>
          <h2>Here is a list of users</h2>
          <ol className={styles.list}>
            <li>
              <Link href="users/1">User 1</Link>
            </li>
            <li>
              <Link href="users/2">User 2</Link>
            </li>
            <li>
              <Link href="users/3">User 3</Link>
            </li>
            <li>
              <Link href="users/4">User 4</Link>
            </li>
            <li>
              <Link href="users/5">User 5</Link>
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}
