import { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let page;

  if (isLoggedIn) {
    page = <UserPage handleLogout={handleLogout} />;
  } else {
    page = (
      <div>
        <GuestPage />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return <div className="App">{page}</div>;
}

export default App;
