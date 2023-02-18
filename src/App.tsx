import { useAuth0 } from "@auth0/auth0-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./components/Nav";
import { RouteList } from "./routes";

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const { routes } = RouteList({ isAuthenticated, isLoading });
  const router = createBrowserRouter(routes);
  return (
    <div className="font-roboto">
      <Nav />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
