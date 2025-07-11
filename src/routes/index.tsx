import Box from "@mui/material/Box";
import { createFileRoute } from "@tanstack/react-router";
import { Menu, Settings } from "lucide-react";

import FindingsBySeverity from "@/components/FindingsBySeverity";
import FindingsPerSource from "@/components/FindingsPerSource";
import TopVulnerableAssets from "@/components/TopVulnerableAssets";
import { useAppContext } from "@/context/menu-context";
import MenuButton from "@/components/MenuButton";
import Input from "@/components/Input";
import CustomSelect from "@/components/Select";
import DashboardTable from "@/components/DashboardTable";
import { SELECTS } from "@/constants";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { setMenu } = useAppContext();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          gap: "16px",
          justifyContent: "space-between",
        }}
      >
        <img
          src="/images/logo.jpg"
          alt="Tonic Logo"
          style={{
            width: "48px",
            height: "48px",
            objectFit: "contain",
          }}
        />

        <MenuButton
          onClick={(e) => {
            e.stopPropagation();
            setMenu((prev) => !prev);
          }}
        >
          <Menu className="menu-icon" />
        </MenuButton>
      </Box>

      <Box
        sx={{
          overflowX: "auto",
        }}
      >
        <Box
          sx={{
            padding: "20px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            border: "1px solid #E2E2EA",
            boxShadow: "0px 2.22px 3.33px 0px #0000000D",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            minWidth: { xs: "100%", md: "1168px" },
            overflowX: "auto",
          }}
        >
          <FindingsBySeverity />
          <TopVulnerableAssets />
          <FindingsPerSource />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <Input placeholder="Search" />

        {SELECTS.map((select) => (
          <CustomSelect
            key={select.id}
            id={select.id}
            labelId={select.id}
            label={select.name}
            labelName={select.name}
            items={[{ label: "Option 1", value: "option1" }]}
          />
        ))}

        <Box
          sx={{
            flexShrink: 0,
            width: "46px",
            height: "46px",
            borderRadius: "12px",
            background: "#FFFFFF",
            border: "1px solid #C6CBD9",
            boxShadow: "0px 2.22px 3.33px 0px #0000000D",
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
          }}
        >
          <Settings style={{ width: "16px", height: "16px" }} />
        </Box>
      </Box>

      <DashboardTable />
    </Box>
  );
}
