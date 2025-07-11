import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    severity: {
      critical: string;
      criticalBg: string;
      high: string;
      highBg: string;
      medium: string;
      mediumBg: string;
      low: string;
      lowBg: string;
    };
  }
  interface PaletteOptions {
    severity?: {
      critical: string;
      criticalBg: string;
      high: string;
      highBg: string;
      medium: string;
      mediumBg: string;
      low: string;
      lowBg: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#416BFF",
    },
    secondary: {
      main: "#6C69FF",
    },
    background: {
      default: "#f9f8ff",
      paper: "#ffffff",
    },
    text: {
      primary: "#383874",
      secondary: "#9A9AAF",
      disabled: "#656575",
    },
    divider: "#EAECF0",
    severity: {
      critical: "#BA0001",
      criticalBg: "#BA00011A",
      high: "#FF2D2E",
      highBg: "#FF2D2E1A",
      medium: "#FAA24B",
      mediumBg: "#FAA24B1A",
      low: "#53CA43",
      lowBg: "#53CA431A",
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
    caption: {
      fontSize: "0.75rem",
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 2.9px 4px 0px rgba(0, 0, 0, 0.05)",
          border: "1px solid #EAECF0",
        },
      },
    },
  },
});
export default theme;
