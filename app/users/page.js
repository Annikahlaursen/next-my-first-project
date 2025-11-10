import styles from "./page.module.css";

export default function Users() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Users Page</h1>
        <section>
          <h2>Here is a list of users</h2>
          <ol className={styles.list}>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
            <li>User 4</li>
            <li>User 5</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
