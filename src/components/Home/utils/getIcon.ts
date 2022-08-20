import React from "react";
import FreezingRainIcon from "../../../weatherIcons/FreezingRainIcon";
import IcePelleteIcon from "../../../weatherIcons/IcePelleteIcon";
import SnowIcon from "../../../weatherIcons/SnowIcon";
import ThunderStormIcon from "../../../weatherIcons/ThunderStormIcon";
import RainHeavyIcon from "../../../weatherIcons/RainHeavyIcon";
import RainModerateIcon from "../../../weatherIcons/RainModerateIcon";
import FogIcon from "../../../weatherIcons/FogIcon";
import CloudyIcon from "../../../weatherIcons/CloudyIcon";
import PartlyCloudyIcon from "../../../weatherIcons/PartlyCloudyIcon";
import ClearDayIcon from "../../../weatherIcons/ClearDayIcon"

type ReturnProps = {
  text: string;
  icon: React.ComponentType;
};

const getIcon = (weatherCode: number): ReturnProps => {
  switch (weatherCode) {
    case 6000:
    case 6001:
    case 6200:
    case 6201:
      return { text: "Freezing Rain", icon: FreezingRainIcon };
    case 7000:
    case 7101:
    case 7102:
      return { text: "Ice Pellets", icon: IcePelleteIcon };
    case 5000:
    case 5001:
    case 5100:
    case 5101:
      return { text: "Snow", icon: SnowIcon };
    case 8000:
      return { text: "Snow", icon: ThunderStormIcon };
    case 4000:
    case 4001:
    case 4200:
      return { text: "Light Rain", icon: RainModerateIcon };
    case 4201:
      return { text: "Heavy Rain", icon: RainHeavyIcon };
    case 2000:
    case 2100:
      return { text: "Fog", icon: FogIcon };
    case 1001:
    case 1102:
      return { text: "Cloudy", icon: CloudyIcon };
    case 1101:
    case 1100:
      return { text: "Partly Cloudy", icon: PartlyCloudyIcon };
    case 1000:
      return { text: "Clear Day", icon: ClearDayIcon };
    default:
      return { text: "Hopefully Clear Day", icon: ClearDayIcon };
  }
};

export default getIcon;
