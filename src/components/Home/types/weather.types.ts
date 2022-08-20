
export type WeatherType = {
  startTime: string;
  values: {
    temperature: number;
    weatherCode: number;
  };
};