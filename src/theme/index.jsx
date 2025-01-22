import PropTypes from "prop-types";
import { useMemo } from "react";
// @mui
import { colors, CssBaseline, responsiveFontSizes } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";
import GlobalStyles from "./globalStyles";

const ThemeProvider = (props) => {
  const { children } = props;

  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = {
    MuiInputBase: {
      styleOverrides: {
        input: {
          padding: "15px 20px !important",
        },
        root: {
          borderRadius: "12px !important",
        },
        inputMultiline: {
          padding: "0px !important",
          borderRadius: "0px !important",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          borderRadius: "12px",
          FontSize: "16px",
          fontWeight: 400,
          borderWidth: "0.8px",
          color: "#FFFFFF",
        },
        notchedOutline: {
          border: "1px solid #83899B2B",
          backgroundColor: "rgba(159, 158, 150, 0.08)",
          borderRadius: "12px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#000000",
          boxShadow: "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: "12px",
          padding: "10px 18px",
        },
        startIcon: {
          [theme.breakpoints.down("md")]: {
            margin: "0",
          },
        },
      },
    },
  };

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
