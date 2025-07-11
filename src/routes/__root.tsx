import Box from "@mui/material/Box";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "@mui/material/styles";

import TanStackQueryLayout from "../integrations/tanstack-query/layout.tsx";
import type { QueryClient } from "@tanstack/react-query";
import Sidebar from "@/components/Sidebar/index.tsx";
import { AppProvider } from "@/context/menu-context.tsx";
import theme from "@/theme.ts";

interface MyRouterContext {
  queryClient: QueryClient;
}

const RootLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            height: "100dvh",
          }}
        >
          <Sidebar />

          <Box
            sx={{
              flex: 1,
              overflow: "auto",
              padding: { xs: "24px 16px", md: "24px 36px 40px 0" },
            }}
          >
            <Outlet />
          </Box>
        </Box>
        <TanStackRouterDevtools />
        <TanStackQueryLayout />
      </AppProvider>
    </ThemeProvider>
  );
};

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootLayout,
});
