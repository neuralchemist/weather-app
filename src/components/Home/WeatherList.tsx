// mui
import Grid from "@mui/material/Grid";
// custom component
import WeatherCard from "./WeatherCard";

// custom types
import { WeatherType } from "./types/weather.types";

type WeatherListProps = {
  weatherData: [] | WeatherType[];
};

function WeatherList({ weatherData }: WeatherListProps) {
  return (
    <Grid container spacing={3} sx={{ width: "100%", height: "100%", mb: 8 }}>
      {weatherData.map((day, i) => (
        <Grid item xs={12} sm={6} md={3} key={day.startTime}>
          <WeatherCard day={day} />
        </Grid>
      ))}
    </Grid>
  );
}

export default WeatherList;
