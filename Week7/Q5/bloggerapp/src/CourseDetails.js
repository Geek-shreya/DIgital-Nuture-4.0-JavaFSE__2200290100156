function CourseDetails() {
  const courses = [
    { id: 1, title: "JavaScript" },
    { id: 2, title: "ReactJS" }
  ];
  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map((c) => (
          <li key={c.id}>{c.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
