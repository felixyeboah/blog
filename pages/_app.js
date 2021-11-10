import "../styles/globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { theme } from "@config/theme";
import Navbar from "@container/Navbar";
import Footer from "@container/Footer";
import { muiTheme } from "@config/muiTheme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={muiTheme}>
      <StyledEngineProvider injectFirst>
        <ChakraProvider theme={theme}>
          <Box pos="relative" minH="100vh">
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </Box>
        </ChakraProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default MyApp;
