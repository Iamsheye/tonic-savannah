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
import { DASHBOARD_DATA } from "@/constants";
import ContactPhoneIcon from "@/assets/icon-tsx/contact-phone";

const headings = [
  "Finding",
  "Asset",
  "Affected Software",
  "Owned By",
  "Internet Exposed",
  "Status",
  "Severity",
  "Source",
  "First Seen",
  "Last Seen",
];

const DashboardTable = () => {
  const { data } = useQuery({
    queryKey: ["dashboard-data"],
    queryFn: () => Promise.resolve(DASHBOARD_DATA),
    initialData: [],
  });

  return (
    <Box
      sx={{
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0px 2.9px 4px 0px #0000000D",
        border: "1px solid #EAECF0",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "10px",
          overflowX: "auto",
          "& .MuiTableContainer-root": {
            borderRadius: "10px",
          },
        }}
      >
        <Table
          sx={{
            minWidth: 1620,
          }}
          aria-label="dashboard findings table"
        >
          <TableHead>
            <TableRow>
              {headings.map((heading) => (
                <TableCell
                  key={heading}
                  sx={{
                    padding: "12px 24px",
                    background: "#fff",
                    borderBottom: "1px solid #EAECF0",
                    color: "#9A9AAF",
                    fontWeight: 500,
                    fontSize: "0.75rem",
                    lineHeight: "1.125rem",
                    textTransform: "uppercase",
                  }}
                >
                  {heading}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              td: {
                padding: "16px 24px",
                borderBottom: "1px solid #EAECF0",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
              },
            }}
          >
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:hover": {
                    backgroundColor: "#F9FAFB",
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
