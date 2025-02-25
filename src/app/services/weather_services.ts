import { API_FORECAST_URL, API_WEATHER_URL } from "../constants/app_constants";
import { ForecastRoot } from "../types/forecast";

export const getForecast = async (city: string) => {
    const forecastJSON: ForecastRoot[] = await fetch(`${API_FORECAST_URL}&q=${city}`)
        .then((res) => res.json())
        .then(res => res.list)
        .catch((err) => console.log(err));

    return forecastJSON
}

export const getWeather = async (city: string) => {
    const weatherJSON = await fetch(`${API_WEATHER_URL}&q=${city}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));

    return weatherJSON
}

export default { getForecast, getWeather }