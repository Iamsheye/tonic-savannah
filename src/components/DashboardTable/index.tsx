import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import InternetExposed from "../InternetExposed";
import Severity from "../Severity";
import StatusIndicator from "../StatusIndicator";
import type { DashboardData } from "./types";
import ContactPhoneIcon from "@/assets/icon-tsx/contact-phone";
import { DASHBOARD_DATA } from "@/constants";

const headings = [
  { name: "Finding" },
  { name: "Asset" },
  { name: "Affected Software" },
  { name: "Owned By" },
  { name: "Internet Exposed", sx: { maxWidth: "88px" } },
  { name: "Status" },
  { name: "Severity" },
  { name: "Source" },
  { name: "First Seen" },
  { name: "Last Seen" },
];

const DashboardTable = () => {
  const { data } = useQuery<Array<DashboardData>>({
    queryKey: ["dashboard-data"],
    queryFn: () =>
      new Promise((resolve) => {
        resolve(DASHBOARD_DATA);
      }),
    initialData: [],
  });

  return (
    <Box
      sx={{
        borderRadius: (theme) => `${theme.shape.borderRadius}px`,
        overflow: "hidden",
        boxShadow: "0px 2.9px 4px 0px #0000000D",
        border: "1px solid #EAECF0",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: (theme) => `${theme.shape.borderRadius}px`,
          overflowX: "auto",
          "& .MuiTableContainer-root": {
            borderRadius: (theme) => `${theme.shape.borderRadius}px`,
          },
        }}
      >
        <Table
          sx={{
            minWidth: 1662,
          }}
          aria-label="dashboard findings table"
        >
          <TableHead>
            <TableRow>
              {headings.map((heading) => (
                <TableCell
                  key={heading.name}
                  sx={{
                    padding: "12px 0 12px 24px",
                    background: "background.paper",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    color: "text.secondary",
                    fontWeight: 500,
                    fontSize: "caption.fontSize",
                    lineHeight: "1.125rem",
                    textTransform: "uppercase",
                    ...heading.sx,
                  }}
                >
                  {heading.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "td, th": {
                padding: "16px 8px 16px 24px",
                borderBottom: "1px solid",
                borderColor: "divider",
                fontSize: "body2.fontSize",
                lineHeight: "1.25rem",
              },
            }}
          >
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.action.hover,
                  },
                }}
              >
                <TableCell>{row.finding}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <img
                      src={`/images/${row.asset.type.toLowerCase()}.png`}
                      style={{
                        width: row.asset.type === "AP" ? "100%" : "32px",
                        height: row.asset.type === "AP" ? "24px" : "100%",
                        objectFit: "cover",
                      }}
                    />
                    <span>{row.asset.name}</span>
                  </Box>
                </TableCell>
                <TableCell>
                  {row.affectedSoftware.substring(0, 76)}...
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "6px",
                    }}
                  >
                    <ContactPhoneIcon style={{ flexShrink: 0 }} />
                    <span className="">{row.ownedBy}</span>
                  </Box>
                </TableCell>
                <TableCell>
                  <InternetExposed status={row.internetExposed} />
                </TableCell>
                <TableCell>
                  <StatusIndicator status={row.status} />
                </TableCell>
                <TableCell>
                  <Severity status={row.severity} />
                </TableCell>
                <TableCell>{row.source}</TableCell>
                <TableCell>
                  <span>{row.firstSeen.date}</span>
                  <br />
                  <span style={{ color: "#9A9AAF" }}>{row.firstSeen.time}</span>
                </TableCell>
                <TableCell>
                  <span>{row.lastSeen.date}</span>
                  <br />
                  <span style={{ color: "#9A9AAF" }}>{row.lastSeen.time}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DashboardTable;
