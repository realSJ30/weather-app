import { WeatherParams } from "../../interface/weather.interface";
import TableLineItem from "./TableLineItem";

interface ColumnTitle {
  title?: string;
  subtitle: string;
}

interface TableData {
  data: WeatherParams;
}

const Table = ({ data }: TableData) => {
  // note: mobile view shows only: date, temp
  const columns: ColumnTitle[] = [
    { title: "Date", subtitle: "(mm/dd/yyyy)" },
    { subtitle: "Temp(F)" },
    { subtitle: "Description" },
    { subtitle: "Main" },
    { subtitle: "Pressure" },
    { subtitle: "Humidity" },
  ];

  // render the header of the table
  const headers = (): JSX.Element[] => {
    const headers: JSX.Element[] = [];
    columns.map(({ title, subtitle }, i: number) => {
      if (i < 2) {
        headers.push(
          <dt
            key={i + "d"}
            className={`text-sm font-medium text-gray-500 flex md:hidden justify-start space-x-1`}
          >
            <div>{title}</div> <p>{subtitle}</p>
          </dt>
        );
      }
      headers.push(
        <dt
          key={i}
          className={`text-sm font-medium text-gray-500 flex-col hidden md:flex justify-end`}
        >
          <div>{title}</div> <p>{subtitle}</p>
        </dt>
      );
    });
    return headers;
  };

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className=" border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 grid grid-cols-2 md:grid-cols-6 sm:gap-4 sm:px-6">
            {headers()}
          </div>
          <TableLineItem weather={data} />
        </dl>
      </div>
    </div>
  );
};

export default Table;
