// mui 5
import { styled, Theme, keyframes } from "@mui/material/styles";
import Box from "@mui/material/Box";
// image
import StarImage from "../../assets/images/stars.png";

type Props = {
  theme: Theme;
};

export const StyledBlueSky = styled(Box)(({ theme }: Props) => ({
  position: "absolute",
  top: 0,
  left: 0,
  background: "linear-gradient(to top, #283e51, #0a2342)",
  width: "100%",
  height: "100%",
  zIndex: 0,
}));

export const StarBackground = styled(Box)(({ theme }: Props) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  // backgroundImage: `url(${StarImage})`,
  background: `url(${StarImage}) repeat top center`,
  zIndex: 0,
}));

const cometAnimation = keyframes`

  0% {
    transform: translateY(-25vh) translateX(-5vw) rotate(-45deg);
    opacity: 1;
    height: 5px;
  }
  100% {
    transform: translateY(-100vh) translateX(-50vw) rotate(-45deg);
    opacity: 1;
    height: 600px;
  }
`;

export const StyledComet = styled(Box)(({ theme }: Props) => ({
  width: "8px",
  height: "8px",
  borderTopLeftRadius: "50%",
  borderTopRightRadius: "50%",
  position: "absolute",
  bottom: 0,
  right: 0,
  background:
    "linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1))",

  animation: `${cometAnimation} 10s ease-in infinite`,

  [theme.breakpoints.up("sm")]: {
    width: "10px",
    height: "10px",
  },
}));
