import { useAuth0 } from "@auth0/auth0-react";
import Container from "../components/Container";

const LandingPage = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <Container>
      <>
        <h1 className="text-lg font-bold">
          Welcome to the weather forecast application. Please login with your
          Github user to use the application and view the weather in your city.
        </h1>
        <button
          className="py-2 bg-blue-300 rounded-md w-1/4 mt-8"
          onClick={handleLogin}
        >
          Login
        </button>
      </>
    </Container>
  );
};

export default LandingPage;
