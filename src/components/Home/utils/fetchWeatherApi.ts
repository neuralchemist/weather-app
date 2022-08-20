// axios
import axios from "axios";

/**
 * fetch 7 days weather data from tomorrow.io
 *
 * # Example url format
 * https://api.tomorrow.io/v4/timelines
 * ?location=-74.98529171943665,20.75872069597532
 * &fields=temperature&fields=weatherCode&timesteps=1d
 * &units=metric& apikey=EdvqeDW0zg1M0wMnAnPhJt0CTxZjvqZP
 */

// constants
const URL = "https://api.tomorrow.io/v4/timelines";
const FIELDS = "fields=temperature&fields=weatherCode";
const OTHERS = "timesteps=1d&units=metric";
const APIKEY = process.env.REACT_APP_TOMORROW_IO_API_KEY;

/**get weather data from tomorrow.io api*/
export async function fetchWeatherApi(location: string) {
  console.log("%cFetching weather data from api", "color: green");
  const url = `${URL}?location=${location}&${FIELDS}&${OTHERS}&apikey=${APIKEY}`;
  const { data } = await axios.get(url);
  console.log("%cweather api data:", "color: blue");
  console.log(data);
  const weather = data.data.timelines[0].intervals.slice(0, 7);
  // store weather in local storage
  localStorage.setItem("wapp-weather", JSON.stringify(weather));

  return weather;
}
