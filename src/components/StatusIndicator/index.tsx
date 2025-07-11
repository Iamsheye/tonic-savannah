import Box from "@mui/material/Box";
import type { DashboardData } from "../DashboardTable/types";

interface StatusIndicatorProps {
  status: DashboardData["status"];
}

const getStatusColor = (status: DashboardData["status"]): string => {
  const statusColors = {
    Accepted: "#53CA43",
    Resolved: "#53CA43",
    Assigned: "#0B60EB",
    Ignored: "#9A9AAF",
    Unassigned: "#FF2D2E",
  } as const;

  return statusColors[status];
};

const StatusIndicator = ({ status }: StatusIndicatorProps) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
    <Box
      component="span"
      sx={{
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        flexShrink: 0,
        backgroundColor: getStatusColor(status),
      }}
    />
    <span>{status}</span>
  </Box>
);

export default StatusIndicator;
