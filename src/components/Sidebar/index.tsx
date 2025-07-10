import Box from "@mui/material/Box";
import { CircleX } from "lucide-react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuButton from "../MenuButton";
import DashboardIcon from "@/assets/icon-tsx/dashboard";
import OptionsIcon from "@/assets/icon-tsx/options";
import FindingsIcon from "@/assets/icon-tsx/findings";
import AlertsIcon from "@/assets/icon-tsx/alerts";
import SettingsIcon from "@/assets/icon-tsx/settings";
import BotsIcon from "@/assets/icon-tsx/bots";
import { useAppContext } from "@/context/menu-context";

const Sidebar = () => {
  const { menu, setMenu } = useAppContext();

  const FIRST_MENU = [
    {
      id: "dashboard",
      icon: <DashboardIcon />,
    },
    {
      id: "options",
      icon: <OptionsIcon />,
    },
    {
      id: "findings",
      isActive: true,
      icon: <FindingsIcon />,
    },
    {
      id: "alerts",
      icon: <AlertsIcon />,
    },
  ];

  const SECOND_MENU = [
    {
      id: "settings",
      icon: <SettingsIcon />,
    },
    {
      id: "bots",
      icon: <BotsIcon />,
    },
  ];

  return (
    <ClickAwayListener onClickAway={() => setMenu(false)}>
      <Box
        component="nav"
        sx={{
          maxWidth: "91px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: { xs: "112px 24px 24px", md: "24px 0 40px 36px" },
          gap: "48px",
          position: { md: "inherit", xs: "absolute" },
          top: { xs: "0", md: "auto" },
          right: { xs: "0", md: "auto" },
          background: { xs: "white", md: "transparent" },
          height: { xs: "100dvh", md: "auto" },
          zIndex: { xs: 5, md: "auto" },
          boxShadow: {
            xs: "-6px 0px 12px -4px rgba(130, 130, 130, 0.85)",
            md: "none",
          },
          transform: {
            xs: `translateX(${menu ? 0 : 100}%)`,
            md: "none",
          },
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {menu && (
          <MenuButton
            className="close"
            onClick={() => setMenu((prev) => !prev)}
          >
            <CircleX />
          </MenuButton>
        )}

        <img
          src="/images/logo.jpg"
          alt="Tonic Logo"
          style={{
            width: "100%",
            objectFit: "contain",
          }}
        />

        <Box
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              width: "100%",
              height: "100%",
            }}
          >
            {FIRST_MENU.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "10px",
                  backgroundColor: item.isActive ? "#416BFF1A" : "transparent",
                  width: "100%",
                  aspectRatio: "1 / 1",
                }}
              >
                {item.icon}
              </Box>
            ))}
            <Box
              sx={{
                margin: "12px 0",
                height: "2px",
                backgroundColor: "#6C69FF40",
              }}
            ></Box>
            {SECOND_MENU.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "10px",
                  width: "100%",
                  aspectRatio: "1 / 1",
                }}
              >
                {item.icon}
              </Box>
            ))}
          </Box>

          <img
            src="/images/user.jpg"
            alt="Tonic user"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default Sidebar;
