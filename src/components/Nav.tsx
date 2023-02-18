import { useAuth0 } from "@auth0/auth0-react";
import { redirect } from "react-router-dom";
import { CloudIcon } from "./Icons";

const Nav = () => {
  const { isAuthenticated, logout } = useAuth0();

  const handleLogOut = () => {
    logout();
  };

  return (
    <div className="flex p-4 bg-blue-300 justify-between">
      <div className="flex items-center space-x-2">
        <CloudIcon />
        <h1>Weather App</h1>
      </div>
      {isAuthenticated && <button onClick={handleLogOut}>Logout</button>}
    </div>
  );
};

export default Nav;
