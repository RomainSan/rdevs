import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#73A9AD",
    },
    secondary: {
      main: "#DBC8AC",
    },
    custom: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Century Gothic",
    color: "#fff",
    h3: {
      color: "#222222",
      textTransform: "uppercase",
    },
    h4: {
      color: "#507679",
    },
    h5: {
      color: "#73A9AD",
      textTransform: "capitalize",
      margin: "10px 0",
    },
    body1: {
      color: "#222222",
    },
    body2: {
      color: "#fff",
      fontSize: "16px",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          textDecoration: "none",
          color: "#fff",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          fontSize: "1.2em",
          color: "#626262",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        title: {
          color: "#73A9AD",
          textTransform : "initial"
        },
      },
    },
  },
});

export default theme;
