const API_KEY = "25e1f37ffdec1370b0927d225f6b339e";
const API_URL = `https://api.openweathermap.org/data/2.5/`;
const API_FORECAST_URL = `${API_URL}forecast?units=metric&exclude=current,minutely,daily,alerts&appid=${API_KEY}&lang=pt_br`;
const API_WEATHER_URL = `${API_URL}weather?units=metric&exclude=current,minutely,daily,alerts&appid=${API_KEY}&lang=pt_br`;

export { API_FORECAST_URL, API_WEATHER_URL };
