import PropTypes from "prop-types";
import { useMemo } from "react";
import { CssBaseline, responsiveFontSizes } from "@mui/material";
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
        multiline: {
          padding: "0px !important",
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
          color: "#000000",
        },
        notchedOutline: {
          border: "1px solid #83899B2B",
          backgroundColor: "rgba(159, 158, 150, 0.08)",
          borderRadius: "12px",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "white !important",
          borderRadius: "5px !important",
          "&:hover": {
            backgroundColor: "white",
          },
          "& .Mui-focused": {
            backgroundColor: "white",
          },
        },
        input: {
          color: "rgb(102, 102, 102)",
          fontWeight: "bold",
          paddingLeft: "12px !important",
          paddingBottom: "0px !important",
          fontSize: "20px",
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
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          color: "#181433",
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          color: "#1B1C31",
          fontSize: "21px",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          "& .MuiDialogTitle-root": {
            color: "#1D1D3E",
            fontSize: "30px",
            fontWeight: "600",
          },
          "& .MuiInputLabel-root": {
            color: "#1D1D3E",
            fontSize: "12px",
            marginBottom: "8px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "5px",
            backgroundColor: "transparent",
            borderColor: "#EEEEEE",
          },
          "& .MuiInputBase-input": {
            padding: "15px !important",
            "&::placeholder": {
              color: "#999999",
              opacity: 1,
            },
          },
          "& .MuiFormHelperText-root":{
            margin:"2px",
          }
        },
      },
      defaultProps: {
        slotProps: {
          backdrop: {
            sx: {
              backdropFilter: "blur(3px)",
            },
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
