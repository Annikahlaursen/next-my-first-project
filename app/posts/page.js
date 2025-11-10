import styles from "./page.module.css";

export default function Users() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Post Page</h1>
        <section>
          <h2>Here is a list of posts</h2>
          <ol className={styles.list}>
            <li>Post 1</li>
            <li>Post 2</li>
            <li>Post 3</li>
            <li>Post 4</li>
            <li>Post 5</li>
          </ol>
        </section>
      </main>
    </div>
  );
}
