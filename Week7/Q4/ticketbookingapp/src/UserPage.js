function UserPage({ handleLogout }) {
  return (
    <div>
      <h1>Welcome User</h1>
      <h2>Available Flights (Click to Book)</h2>
      <ul>
        <li>Delhi ✈ Mumbai — <button>Book</button></li>
        <li>Chennai ✈ Bengaluru — <button>Book</button></li>
        <li>Kolkata ✈ Hyderabad — <button>Book</button></li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserPage;
