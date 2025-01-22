export function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }) {
  return {
    "@media (min-width:600px)": {
      fontSize: `${sm}px`,
    },
    "@media (min-width:900px)": {
      fontSize: `${md}px`,
    },
    "@media (min-width:1200px)": {
      fontSize: `${lg}px`,
    },
  };
}

const FONT_PRIMARY = "Bricolage Grotesque, sans-serif"; // Local Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    // fontSize: '40px',
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    // fontSize: '32px',
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    // fontSize: '24px',
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    // fontSize: '20px',
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    // fontSize: '18px',
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 600,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    // fontSize: '17px',
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    // fontSize: '14px',
  },
  subtitle2: {
    fontWeight: 500,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    // fontSize: '14px',
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    // fontSize: '16px',
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    // fontSize: '14px',
    color: "grey",
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    // fontSize: '12px',
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    // fontSize: '12px',
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(16),
    // fontSize: '14px',
    textTransform: "capitalize",
  },
};

export default typography;
