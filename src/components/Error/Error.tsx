// mui
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

type ErrorProps = {
  error: string;
};

function Error({ error }: ErrorProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Alert severity="error">{error}</Alert>
    </Box>
  );
}

export default Error;
