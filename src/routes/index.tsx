import { Navigate, RouteObject } from "react-router-dom";
import Loading from "../components/Loading";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import WeatherPage from "../pages/WeatherPage";

interface RouteParams {
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const RouteList = ({ isAuthenticated, isLoading }: RouteParams) => {
  const errorPage = {
    errorElement: <ErrorPage />,
  };

  const protectedRoutes = (element: JSX.Element): JSX.Element => {
    return isAuthenticated ? element : <Navigate to={"/"} />;
  };

  const routes: RouteObject[] = [
    {
      path: "/",
      element: isLoading ? (
        <Loading />
      ) : !isAuthenticated ? (
        <LandingPage />
      ) : (
        <Navigate to={"/home"} />
      ),
      ...errorPage,
    },
    {
      path: "/home",
      element: protectedRoutes(<HomePage />),
      ...errorPage,
    },
    {
      path: "/weather/:city",
      element: protectedRoutes(<WeatherPage />),
      ...errorPage,
    },
  ];
  return { routes };
};
