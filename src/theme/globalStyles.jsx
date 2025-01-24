import { MarginOutlined } from "@mui/icons-material";
import { GlobalStyles as MUIGlobalStyles } from "@mui/material";

export default function GlobalStyles() {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        "*": {
          boxSizing: "border-box",
        },
        html: {
          margin: 0,
          padding: 0,
          width: "100%",
          minHeight: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundImage: `url("vector_1580.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize:"61%",
        },
        "#root": {
          width: "100%",
          minHeight: "100%",
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },
        ul: {
          margin: 0,
          padding: 0,
        },
        a: {
          textDecoration: "none",
        },
      }}
    />
  );

  return inputGlobalStyles;
}
