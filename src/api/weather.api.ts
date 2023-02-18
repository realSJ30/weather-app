import axios from "axios";
import { WeatherParams } from "../interface/weather.interface";

interface GetWeatherProps {
  city: string;
}

export const getWeather = async ({
  city,
}: GetWeatherProps): Promise<WeatherParams | null> => {
  const weatherApiKey = import.meta.env.VITE_APP_WEATHER_API_KEY;
  const weatherEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  return axios
    .post(weatherEndpoint, null, {
      params: { q: city, appid: weatherApiKey },
    })
    .then((result) => {
      const { data } = result;
      const weatherData: WeatherParams = {
        date: new Date().toLocaleDateString("es-pa"),
        temp: data.main.temp,
        description: data.weather[0].description,
        main: data.weather[0].main,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
      };
      return weatherData;
    })
    .catch((err) => {
      return null;
    });
};
