import React from "react";
// dayjs
import dayjs from "dayjs";
// custom hooks
import useFetchWeather from "./hooks/useFetchWeather";
// custom component
import Loading from "../Loading";
import Error from "../Error";
import WeatherList from "./WeatherList";
import WeatherToday from "./WeatherToday";
import { StyledHome, StyledTitle } from "./styledComponents";

function Home() {
  const { weatherData, status, error } = useFetchWeather();

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <Error error={error} />;
  }

  const today = dayjs(new Date()).format("dddd, DD MMMM YYYY");
  const current = weatherData.filter(
    (day) => dayjs(day.startTime).format("dddd, DD MMMM YYYY") === today
  )[0];

  return (
    <StyledHome maxWidth="md">
      <StyledTitle variant="h2">Predicting The Future</StyledTitle>
      {current && <WeatherToday day={current} />}
      <WeatherList weatherData={weatherData} />
    </StyledHome>
  );
}

export default Home;
