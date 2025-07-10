import Box from "@mui/material/Box";

import Heading from "../Heading";
import Severity from "../Severity";
import TonicDonutChart from "../PieChart";
import type { ICritical } from "../Severity";

const FindingsBySeverity = () => {
  const FINDINGS_PER_SEVERITY: Array<{ id: ICritical; count: number }> = [
    {
      id: "critical",
      count: 3,
    },
    {
      id: "high",
      count: 3,
    },
    {
      id: "medium",
      count: 1,
    },
    {
      id: "low",
      count: 1,
    },
  ];

  return (
    <Box
      sx={{
        flex: 1,
        borderRight: { xs: "none", md: "1px solid #E2E2EA" },
        borderBottom: { xs: "1px solid #E2E2EA", md: "none" },
        marginRight: { xs: 0, md: "24px" },
        marginBottom: { xs: "24px", md: 0 },
        paddingRight: { xs: 0, md: "24px" },
        paddingBottom: { xs: "24px", md: 0 },
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Heading>Findings By Severity</Heading>
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          justifyContent: "space-between",
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        <Box
          sx={{
            padding: "0 10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {FINDINGS_PER_SEVERITY.map(({ id, count }) => (
            <Severity status={id} count={count} />
          ))}
        </Box>

        <TonicDonutChart
          data={FINDINGS_PER_SEVERITY.map((source) => ({
            value: source.count,
            label: source.id,
          }))}
        />
      </Box>
    </Box>
  );
};

export default FindingsBySeverity;
