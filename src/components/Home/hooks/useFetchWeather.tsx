import { useEffect, useState } from "react";
import dayjs from "dayjs";
// custom function
import { fetchLocation } from "../utils/fetchLocation";
import { fetchWeatherApi } from "../utils/fetchWeatherApi";
// custom types
import { WeatherType } from "../types/weather.types";
import { Status } from "../types/status.types";

function useFetchWeather() {
  const [status, setStatus] = useState<Status>("loading");
  const [weatherData, setWeatherData] = useState<[] | WeatherType[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // fetch location from local storage or geolocation api
        const location = await fetchLocation();

        // search weather data in local storage
        let localWeather: string | null = localStorage.getItem("wapp-weather");
        let weather: [] | WeatherType[] = [];

        if (localWeather) {
          console.log("%cFound weather data in local storage", "color: red");
          // parse json
          weather = JSON.parse(localWeather);
          // set weather data and status
          setWeatherData(weather);
          setStatus("success");
          // make localWeather stale if data  more than  72 hours old
          const today = new Date();
          const firstDay = weather[0].startTime;
          if (dayjs(today).diff(firstDay, "hour") > 72) localWeather = null;
        }

        // fetch from api if data not in local storage or stale
        if (!localWeather) {
          weather = await fetchWeatherApi(location);
          // set weather data and status
          setWeatherData(weather);
          setStatus("success");
        }

        // ---DEBUGGING---
        console.log("%cWeather Data 7 Days", "color: green");
        console.log(weather);
      } catch (err) {
        // set status and error
        setStatus("error");
        setError(`${err}`);
        console.log("---ERROR---:", err);
      }
    };

    fetchWeather();
  }, []);

  return { weatherData, status, error };
}

export default useFetchWeather;
