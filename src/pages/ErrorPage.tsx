import { useNavigate } from "react-router-dom";
import Container from "../components/Container";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/home");
  };

  return (
    <Container>
      <div className="">
        <h1>Oops! I think something's wrong here.</h1>
        <button
          className="py-2 px-4 bg-blue-300 rounded-md mt-8 self-end"
          onClick={handleBack}
        >
          Go back
        </button>
      </div>
    </Container>
  );
};

export default ErrorPage;
