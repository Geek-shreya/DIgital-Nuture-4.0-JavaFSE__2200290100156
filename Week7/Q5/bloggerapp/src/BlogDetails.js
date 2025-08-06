function BlogDetails() {
  const blogs = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "Hooks in React" }
  ];
  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((b) => (
          <li key={b.id}>{b.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
