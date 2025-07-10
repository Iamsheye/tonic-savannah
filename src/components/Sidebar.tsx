import Box from "@mui/material/Box";
import DashboardIcon from "@/assets/icon-tsx/dashboard";
import OptionsIcon from "@/assets/icon-tsx/options";
import FindingsIcon from "@/assets/icon-tsx/findings";
import AlertsIcon from "@/assets/icon-tsx/alerts";
import SettingsIcon from "@/assets/icon-tsx/settings";
import BotsIcon from "@/assets/icon-tsx/bots";

const Sidebar = () => {
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
    <Box
      component="nav"
      sx={{
        maxWidth: "91px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "24px 0 40px 36px",
        gap: "48px",
      }}
    >
      <img
        src="/images/logo.jpg"
        alt="Tonic Logo"
        style={{
          width: "100%",
          objectFit: "contain",
          // mixBlendMode: "multiply",
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
  );
};

export default Sidebar;
