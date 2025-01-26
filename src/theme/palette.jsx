const PRIMARY = {
  main: "#4F46BA",
  dark: "#3734A9",
};

const SECONDARY = {
  main: "#00E1F0",
  dark: "#F57059",
};

const ERROR = {
  lighter: "#FF8F8F",
  light: "#FF5656",
  main: "#FF1E1E",
  dark: "#BF1616",
  darker: "#800F0F",
  contrastText: "#FFFFFF",
};

const palette = {
  mode: "light",
  common: {
    black: "#040404",
    white: "#FFFFFF",
    darkPurple: "#16012C",
    grey: "rgb(102, 102, 102)",
    greyLight: "rgb(153, 153, 153)",
    light: "#FFF2E3",
    green: "#01966B",
  },
  primary: PRIMARY,
  secondary: SECONDARY,
  error: ERROR,
  text: {
    primary: "#000000",
    secondary: "#757095",
  },
};

export default palette;
