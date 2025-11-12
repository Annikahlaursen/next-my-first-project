export default async function PostDetail({ params }) {
  const { id } = await params;
  console.log("post id:", id);

  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>This is the detail view of id: {id}</p>
    </div>
  );
}
