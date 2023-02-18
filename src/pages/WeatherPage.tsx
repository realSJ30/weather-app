import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getWeather } from "../api/weather.api";
import Container from "../components/Container";
import Loading from "../components/Loading";
import Table from "../components/Table/Table";
import { WeatherParams } from "../interface/weather.interface";

const WeatherPage = () => {
  const navigate = useNavigate();
  const { city } = useParams();
  const {
    data: weather,
    isLoading,
    isError,
    isRefetching,
  } = useQuery<WeatherParams | null>(
    "weather",
    () => getWeather({ city: city || "" }),
    { retry: false }
  );
  const handleBack = () => {
    navigate("/home");
  };

  return (
    <Container>
      {isLoading || isRefetching ? (
        <Loading />
      ) : (
        <div className="flex flex-col w-screen md:w-full p-4 md:p-0">
          {weather && !isError ? <Table data={weather} /> : <div>No data</div>}

          <button
            className="py-2 px-4 bg-blue-300 rounded-md mt-8 self-end"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      )}
    </Container>
  );
};

export default WeatherPage;
