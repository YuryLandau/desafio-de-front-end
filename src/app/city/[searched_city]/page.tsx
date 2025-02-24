import { API_FORECAST_URL, API_WEATHER_URL } from "@/app/constants/app_constants";
import { WeatherRoot } from "@/app/types/weather";
import { capitalizeFirstLetter } from "@/utils/string_transform";
import Image from "next/image";
import CurrentTemp from "./CurrentTemp";
import Periods from "./Periods";
import Stats from "./Stats";


interface SearchByCityProps {
  params: Promise<{
    searched_city: string;
  }>;
}
export default async function SearchByCity(props: SearchByCityProps) {

  const { searched_city } = await props.params;

  // Fetch forecast from API
  const forecast = await fetch(`${API_FORECAST_URL}&q=${searched_city}`);
  const forecastJSON = await forecast.json();

  // Fetch weather from API
  const weather = await fetch(`${API_WEATHER_URL}&q=${searched_city}`);
  const weatherJSON: WeatherRoot = await weather.json();
  const dayStats = {
    humidity: weatherJSON.main.humidity,
    windSpeed: weatherJSON.wind.speed,
    sunrise: weatherJSON.sys.sunrise,
    sunset: weatherJSON.sys.sunset,
  }

  console.log("weatherJSON", weatherJSON);


  return (
    <main className="mx-auto px-5 py-8 bg-gray-200">
      <div className="min-h-dvh flex flex-col items-center justify-center">
        <div className="flex flex-col items-center w-full ">
          <h2 className="text-4xl ">
            {capitalizeFirstLetter(searched_city)} ({weatherJSON.sys.country})
          </h2>

          <p className="text-xl">
            {capitalizeFirstLetter(weatherJSON.weather[0].description)}
          </p>

          <CurrentTemp main={weatherJSON.main} />

          <Image src={`https://openweathermap.org/img/wn/${weatherJSON.weather[0].icon}@4x.png`} alt={capitalizeFirstLetter(weatherJSON.weather[0].description)} width={200} height={200} />

          <Periods forecastList={forecastJSON.list} />

          <Stats dayStats={dayStats} />
        </div>
      </div>
    </main>
  );
}
