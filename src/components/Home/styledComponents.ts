// mui 5
import { styled, Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";

type Props = {
  theme: Theme;
  dateColor?: string;
};

// Home
export const StyledHome = styled(Box)(({ theme }: Props) => ({
  margin: "0 auto",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
}));

// Titel
export const StyledTitle = styled(Typography)(({ theme }: Props) => ({
  marginBottom: theme.spacing(8),
  textAlign: "center",
  color: "#fff",
}));

// Weather Card
export const StyledCard = styled(Card)(({ theme }: Props) => ({
  border: "1px solid rgba(0, 0, 0, 0.3)",
  borderRadius: theme.spacing(2),
  width: "100%",

  background: "transparent",
  boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  transition: "border 0.5s, box-shadow 0.5s",

  "&:hover": {
    border: "1px solid rgba(0, 0, 0, 0.5)",
    boxShadow: "0 4px 20px rgba(255, 255, 255, 0.5)",
  },

  [theme.breakpoints.up("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(0, 1),
  },
}));

export const StyledCardContent = styled(CardContent)(({ theme }: Props) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledCardHeader = styled(
  CardHeader,
  {}
)(({ theme, dateColor }: Props) => ({
  "& .MuiCardHeader-subheader": {
    color: "#bbb",
  },
}));

//  Weather Today
export const StyledTodayCard = styled(Card)(({ theme }: Props) => ({
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: theme.spacing(2),

  background: "rgba(0, 0, 0, 0.1)",
  boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  width: "95%",
  minHeight: "100px",
  marginBottom: theme.spacing(8),
  transition: "border 0.5s, box-shadow 0.5s",

  "&:hover": {
    border: "1px solid rgba(255, 255, 255, 0.5)",
    boxShadow: "0 4px 20px rgba(255, 255, 255, 0.5)",
  },

  [theme.breakpoints.up("sm")]: {
    justifyContent: "space-around",
    alignItems: "center",
  },
}));

export const StyledTodayHeader = styled(CardHeader)(({ theme }: Props) => ({
  width: "100%",

  "& .MuiCardHeader-subheader": {
    color: "#ccc",
    fontSize: theme.spacing(1.75),
  },
  "& .MuiCardHeader-title": {
    color: "#eee",
    fontSize: theme.spacing(3),
  },
  "& .MuiCardHeader-avatar": {
    padding: theme.spacing(0),
  },

  [theme.breakpoints.up("sm")]: {
    "& .MuiCardHeader-subheader": {
      color: "#ccc",
      fontSize: theme.spacing(3),
    },
    "& .MuiCardHeader-title": {
      color: "#eee",
      fontSize: theme.spacing(4),
    },
    "& .MuiCardHeader-avatar": {
      padding: theme.spacing(2),
    },
  },
}));

export const StyledTodayCardContent = styled(CardContent)(
  ({ theme }: Props) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(2),

    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      gap: theme.spacing(4),
    },
  })
);
