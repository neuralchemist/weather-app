import dayjs from "dayjs";
import getIcon from "./utils/getIcon";
// mui
import Typography from "@mui/material/Typography";

// custom types
import { WeatherType } from "./types/weather.types";
// custom components
import {
  StyledTodayCard,
  StyledTodayCardContent,
  StyledTodayHeader,
} from "./styledComponents";

type WeatherTodayProps = {
  day: WeatherType;
};

function WeatherToday({ day }: WeatherTodayProps) {
  const { text, icon: Icon } = getIcon(day.values.weatherCode);
  // const title = dayjs(day.startTime).format("dddd");
  const subheader = dayjs(day.startTime).format("MMMM DD YYYY");

  return (
    <StyledTodayCard>
      <StyledTodayHeader
        avatar={<Icon />}
        title='Today'
        subheader={subheader}
      />

      <StyledTodayCardContent>
        <Typography
          variant="h4"
          fontSize={{ xs: "24px", md: "32px" }}
          color="#fff"
        >
          {Math.round(day.values.temperature)}°C
        </Typography>

        <Typography
          variant="body2"
          fontSize={{ xs: "12px", md: "20px" }}
          color="#ddd"
          sx={{ textAlign: "center" }}
        >
          It's A {text} Day
        </Typography>
      </StyledTodayCardContent>
    </StyledTodayCard>
  );
}

export default WeatherToday;
