import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import SearchIcon from "../components/Icons";

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const [search, setSearch] = useState("");

  const handleDisplay = () => {
    navigate(`/weather/${search}`);
  };

  return (
    <Container>
      <div className="flex flex-col w-96 justify-center items-center p-6">
        <h1 className="hidden md:block my-2 font-bold">{user?.name}</h1>
        <a
          href={`https://github.com/${user?.nickname}`}
          target="_blank"
          className="hidden md:block my-2 text-gray-800"
        >
          https://github.com/{user?.nickname}
        </a>
        <div className="flex p-4 justify-start items-center space-x-2 border rounded-full mt-4 w-full">
          <SearchIcon className="w-4 h-4" />
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Enter City"
            className="no-underline outline-none w-full"
            onChange={({ target }) => setSearch(target.value)}
          />
        </div>
        <button
          className="py-2 px-4 bg-blue-300 rounded-md mt-8"
          onClick={handleDisplay}
        >
          Display Weather
        </button>
      </div>
    </Container>
  );
};

export default HomePage;
