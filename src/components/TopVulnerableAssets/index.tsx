import Box from "@mui/material/Box";

import Heading from "../Heading";
import Severity from "../Severity";
import { StyledVulnerableAssetsTable } from "./tables.styles";
import type { ICritical } from "../Severity";
import { VULNERABLE_ASSETS } from "@/constants";

const TopVulnerableAssets = () => {
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
      <Heading>Top Vulnerable Assets</Heading>

      <Box
        sx={{
          height: { xs: "auto", md: "172px" },
          overflowY: "auto",
        }}
      >
        <StyledVulnerableAssetsTable>
          <thead>
            <tr>
              <th>ASSET NAME</th>
              <th className="pl-3">SEVERITY</th>
            </tr>
          </thead>
          <tbody>
            {VULNERABLE_ASSETS.map((asset) => (
              <tr key={asset.id}>
                <td className="asset-name">{asset.name}</td>
                <td className="severities pl-3">
                  {asset.severity.map((sev) => (
                    <Severity
                      isShort
                      status={sev.id as ICritical}
                      count={sev.count}
                    />
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </StyledVulnerableAssetsTable>
      </Box>
    </Box>
  );
};

export default TopVulnerableAssets;
