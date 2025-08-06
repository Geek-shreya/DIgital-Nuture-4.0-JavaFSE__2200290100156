import React from "react";

function App() {
  // creating JSX element heading
  const heading = <h1>Office Space Rental App</h1>;

  // creating object of office
  const officeObj = {
    name: "Smart Work Hub",
    rent: 45000,
    address: "MG Road, Bengaluru",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36"
  };

  // list of office objects
  const offices = [
    {
      name: "Smart Work Hub",
      rent: 45000,
      address: "MG Road, Bengaluru",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36"
    },
    {
      name: "Prestige Workspace",
      rent: 85000,
      address: "Banerghatta Road, Bengaluru",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
    },
    {
      name: "Skyview Offices",
      rent: 65000,
      address: "Gachibowli, Hyderabad",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    }
  ];

  return (
    <div className="App">
      {/* Rendering JSX */}
      {heading}

      {/* Loop office list */}
      {offices.map((office, idx) => (
        <div
          key={idx}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
            width: "300px"
          }}
        >
          {/* JSX Attribute for image */}
          <img
            src={office.image}
            alt={office.name}
            width="100%"
            height="150px"
          />

          {/* JavaScript expressions inside JSX */}
          <h2>{office.name}</h2>
          <p>{office.address}</p>
          {/* Conditional inline CSS in JSX */}
          <p
            style={{
              color: office.rent > 60000 ? "green" : "red"
            }}
          >
            ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
