// mui 5
import { styled, Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";

type Props = {
  theme: Theme;
  dateColor?: string;
};

// Home
export const StyledIcon = styled(Box)(({ theme }: Props) => ({
  width: "50px",
  height: "50px",
  fill: "#ddd",
}));
