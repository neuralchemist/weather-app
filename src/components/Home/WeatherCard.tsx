import dayjs from "dayjs";
import getIcon from "./utils/getIcon";
// mui
import Typography from "@mui/material/Typography";

// custom types
import { WeatherType } from "./types/weather.types";
// custom components
import { StyledCard, StyledCardContent } from "./styledComponents";

import { StyledCardHeader } from "./styledComponents";
type WeatherCardsProps = {
  day: WeatherType;
};

function WeatherCard({ day }: WeatherCardsProps) {
  const { text, icon: Icon } = getIcon(day.values.weatherCode);
  const today = dayjs(new Date()).format("dddd, DD MMMM YYYY");
  const current = dayjs(day.startTime).format("dddd, DD MMMM YYYY");
  const dateColor = today === current ? "goldenrod" : "#fff";
  const title = dayjs(day.startTime).format("MMMM DD");
  const subheader = dayjs(day.startTime).format("dddd");

  return (
    <StyledCard>
      <StyledCardHeader
        avatar={<Icon />}
        title={title}
        subheader={subheader}
        sx={{ color: dateColor }}
      />
      <StyledCardContent>
        <Typography variant="h6" sx={{ color: "#ddd" }}>
          {Math.round(day.values.temperature)}°C
        </Typography>

        <Typography variant="body2" sx={{ color: "#fff" }}>
          {text}
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
}

export default WeatherCard;
