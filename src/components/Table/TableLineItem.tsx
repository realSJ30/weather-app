import { WeatherParams } from "../../interface/weather.interface";

interface TableLineItems {
  weather: WeatherParams;
}

const TableLineItem = ({  weather }: TableLineItems) => {
  const keys = Object.keys(weather) as (keyof WeatherParams)[];
  return (
    <div className="bg-white px-4 py-5 grid grid-cols-2 md:grid-cols-6 sm:gap-4 sm:px-6">
      {keys.map((key: keyof WeatherParams, i: number) => {
        if (key === "date" || key === "temp") {
          return (
            <dd key={i} className="text-sm text-gray-900 block">
              {weather[key]}
            </dd>
          );
        }
        return (
          <dd key={i} className="text-sm text-gray-900 md:block hidden">
            {weather[key]}
          </dd>
        );
      })}
    </div>
  );
};

export default TableLineItem;
