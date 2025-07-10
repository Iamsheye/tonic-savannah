import Box from "@mui/material/Box";
import { createFileRoute } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import styled from "@emotion/styled";

import FindingsBySeverity from "@/components/FindingsBySeverity";
import FindingsPerSource from "@/components/FindingsPerSource";
import TopVulnerableAssets from "@/components/TopVulnerableAssets";
import { useAppContext } from "@/context/menu-context";
import MenuButton from "@/components/MenuButton";

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
          minWidth: { md: "1168px", xs: "auto" },
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
          }}
        >
          <FindingsBySeverity />
          <TopVulnerableAssets />
          <FindingsPerSource />
        </Box>
      </Box>
    </Box>
  );
}
