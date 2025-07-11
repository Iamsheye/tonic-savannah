import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Heading from "../Heading";
import TonicDonutChart from "../PieChart";
import DefenderIcon from "@/assets/icon-tsx/defender";
import ArticWolfIcon from "@/assets/icon-tsx/artic-wolf";

const FindingsPerSource = () => {
  const FINDINGS_PER_SOURCE = [
    {
      id: 1,
      name: "Microsoft Defender",
      findings: 428,
      color: "#5694FF",
      icon: <DefenderIcon />,
    },
    {
      id: 2,
      name: "Arctic Wolf ",
      findings: 119,
      color: "#23618E",
      icon: <ArticWolfIcon />,
    },
  ];

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Heading>Finding Per Source</Heading>
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          {FINDINGS_PER_SOURCE.map((source) => (
            <Box
              key={source.id}
              sx={{
                borderLeft: `5px solid ${source.color}`,
                paddingLeft: "15px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {source.icon}

              <Typography
                sx={{
                  fontFamily: "theme.typography.fontFamily",
                  fontWeight: 600,
                  fontSize: "2.25rem",
                  lineHeight: "0.8",
                  color: "#656575",
                }}
              >
                {source.findings}
              </Typography>

              <Typography
                sx={{
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                  maxWidth: "84px",
                  background:
                    "linear-gradient(0deg, #383874, #383874), linear-gradient(0deg, #03165F, #03165F)",
                  backgroundClip: "text",
                }}
              >
                {source.name}
              </Typography>
            </Box>
          ))}
        </Box>

        <TonicDonutChart
          data={FINDINGS_PER_SOURCE.map((source) => ({
            value: source.findings,
            label: source.name,
            color: source.color,
          }))}
        />
      </Box>
    </Box>
  );
};

export default FindingsPerSource;
