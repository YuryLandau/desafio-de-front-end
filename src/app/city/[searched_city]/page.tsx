import { getForecast, getWeather } from "@/app/services/weather_services";
import { ForecastRoot } from "@/app/types/forecast";
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
  const forecastJSON: ForecastRoot[] = await getForecast(searched_city)

  // Fetch weather from API
  const weatherJSON: WeatherRoot = await getWeather(searched_city)

  const dayStats = {
    humidity: weatherJSON.main.humidity,
    windSpeed: weatherJSON.wind.speed,
    sunrise: weatherJSON.sys.sunrise,
    sunset: weatherJSON.sys.sunset,
  }

  return (
    <main
      data-day={weatherJSON.weather[0].icon.includes("d")}
      className="group mx-auto px-5 py-8 md:py-36 bg-gray-200 text-gray-600 data-[day=true]:bg-blue data-[day=true]:text-gray-100">
      <div className="min-h-dvh flex flex-col items-center justify-center">
        <div className="flex flex-col items-center w-full ">
          <h2 className="text-5xl text-center font-light pb-1">
            {capitalizeFirstLetter(searched_city)} ({weatherJSON.sys.country})
          </h2>

          <h3 className="text-2xl font-extralight">
            {capitalizeFirstLetter(weatherJSON.weather[0].description)}
          </h3>

          <CurrentTemp main={weatherJSON.main} />

          <Image className="toggle-fill-svg pb-6" src={`/assets/icons/${weatherJSON.weather[0].icon}.svg`} alt={capitalizeFirstLetter(weatherJSON.weather[0].description)} width={176} height={176} />

          <Periods forecastList={forecastJSON} />

          <Stats dayStats={dayStats} />
        </div>
      </div>
    </main>
  );
}
