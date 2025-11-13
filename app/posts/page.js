import Link from "next/link";
import styles from "../page.module.css";

export default async function Posts() {
  const response = await fetch(
    "https://fb-rest-race-default-rtdb.firebaseio.com/posts.json"
  );
  const dataObject = await response.json();
  console.log(dataObject);

  const posts = Object.keys(dataObject).map((key) => ({
    id: key,
    ...dataObject[key],
  }));
  console.log(posts);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Post Page</h1>
        <section>
          <h2>Here is a list of posts</h2>
          <ol className={styles.list}>
            {posts.map((post) => (
              <li key={post.id}>
                <Link href={`posts/${post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}
