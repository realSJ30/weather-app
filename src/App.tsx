import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav";
import { RouteList } from "./routes";

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const { routes } = RouteList({ isAuthenticated, isLoading });
  const router = createBrowserRouter(routes);

  const testNeon = async () => {
    const orgId = "elihuclub";
    const apiKey = "0c385f8d02639b43e655d78892d48508";

    var config = {
      method: "GET",
      url: "https://api.neoncrm.com/v2/accounts?userType=INDIVIDUAL",
      headers: {
        Authorization: `Basic ${btoa(`${orgId}:${apiKey}`)}`,
      },
    };
    // Use the Axios library to make the API call
    await axios(config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    testNeon();
  }, []);

  return (
    <div className="font-roboto">
      <Nav />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
