import { createTheme } from "@mui/material";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#2b56cd",
      light: "#9dabe6",
      dark: "#0639aa",
      contrastText: "#e8ebf9",
    },
  },
  typography: {
    fontFamily: '"PlusJakartaSans", sans-serif',
    htmlFontSize: 10,
    fontSize: 12,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontWeightLight: 300,
    fontWeightMedium: 600,
  },
});
