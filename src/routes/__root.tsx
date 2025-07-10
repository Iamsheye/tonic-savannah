import Box from "@mui/material/Box";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import TanStackQueryLayout from "../integrations/tanstack-query/layout.tsx";
import type { QueryClient } from "@tanstack/react-query";
import Sidebar from "@/components/Sidebar.tsx";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "40px",
          height: "100dvh",
        }}
      >
        <Sidebar />

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            padding: "24px 36px 40px 0",
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <TanStackRouterDevtools />
      <TanStackQueryLayout />
    </>
  ),
});
