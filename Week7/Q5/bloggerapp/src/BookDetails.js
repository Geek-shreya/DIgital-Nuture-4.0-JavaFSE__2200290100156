function BookDetails() {
  const books = [
    { id: 1, name: "The Alchemist" },
    { id: 2, name: "Harry Potter" },
    { id: 3, name: "Ikigai" }
  ];
  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map((b) => (
          <li key={b.id}>{b.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
