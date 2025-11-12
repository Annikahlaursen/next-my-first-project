export default async function UserDetail({ params }) {
  const { id } = await params;
  console.log("user id:", id);

  return (
    <div>
      <h1>User Detail Page</h1>
      <p>This is the detail view of id: {id}</p>
    </div>
  );
}
