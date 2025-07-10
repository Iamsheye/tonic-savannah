import { createFileRoute } from "@tanstack/react-router";
import Box from "@mui/material/Box";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    ></Box>
  );
}
