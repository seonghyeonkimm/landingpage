import colors from "tailwindcss/colors";
import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

import { px } from "./utils";

export const darkMode = "[data-theme='dark']";

export type Breakpoint = keyof typeof breakpoints;
export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};
export const mediaMobileOnly = `screen and (min-width: ${
  breakpoints.mobile
}px) and (max-width: ${breakpoints.tablet - 1}px)`;
export const mediaTablet = `screen and (min-width: ${breakpoints.tablet}px)`;
export const mediaTabletOnly = `screen and (min-width: ${
  breakpoints.tablet
}px) and (max-width: ${breakpoints.desktop - 1}px)`;
export const mediaDesktop = `screen and (min-width: ${breakpoints.desktop}px)`;

const palette = {
  white: "#fff",
  black: "#0e0e10",
  red: colors.red["500"],
  yellow: colors.yellow["300"],
  green50: colors.emerald["50"],
  green200: colors.emerald["200"],
  green300: colors.emerald["300"],
  green400: colors.emerald["400"],
  green500: colors.emerald["500"],
  green600: colors.emerald["600"],

  gray50: colors.gray["50"],
  gray100: colors.gray["100"],
  gray200: colors.gray["200"],
  gray300: colors.gray["300"],
  gray400: colors.gray["400"],
  gray500: colors.gray["500"],
  gray600: colors.gray["600"],
  gray700: colors.gray["700"],
  gray800: colors.gray["800"],
  gray900: colors.gray["900"],

  slate800: colors.slate["800"],
  slate900: colors.slate["900"],

  teal50: colors.teal["50"],
  teal100: colors.teal["100"],
  teal200: colors.teal["200"],
  teal300: colors.teal["300"],
  teal400: colors.teal["400"],
  teal500: colors.teal["500"],
  teal600: colors.teal["600"],
  teal700: colors.teal["700"],
  teal800: colors.teal["800"],
  teal900: colors.teal["900"],

  blue50: colors.sky["50"],
  blue100: colors.sky["100"],
  blue200: colors.sky["200"],
  blue300: colors.sky["300"],
  blue400: colors.sky["400"],
  blue500: colors.sky["500"],
  blue600: colors.sky["600"],
  blue700: colors.sky["700"],
  blue800: colors.sky["800"],
  blue900: colors.sky["900"],

  pink50: colors.fuchsia["50"],
  pink100: colors.fuchsia["100"],
  pink200: colors.fuchsia["200"],
  pink300: colors.fuchsia["300"],
  pink400: colors.fuchsia["400"],
  pink500: colors.fuchsia["500"],
  pink600: colors.fuchsia["600"],
  pink700: colors.fuchsia["700"],
  pink800: colors.fuchsia["800"],
  pink900: colors.fuchsia["900"],

  neutral400: "#9CA3AF",
  neutral700: "#374151",
  neutral900: "#111827",
};

const lightModeSemanticColors = {
  primary: "#0876DD",
  primary100: "#E0F2FE",
  primary600: "#0876DD",
  secondary: "#CFFAFE",
  secondary100: "#CFFAFE",
  secondary600: "#29D2D3",
  paper: palette.white,
};

// const darkModeSemanticColors = {
//   primary: "",
//   secondary: "",
//   paper: "",
// };

const spacing = {
  0: px(0),
  4: px(4),
  8: px(8),
  12: px(12),
  14: px(14),
  16: px(16),
  18: px(18),
  20: px(20),
  24: px(24),
  28: px(28),
  30: px(30),
  32: px(32),
  36: px(36),
  40: px(40),
  44: px(44),
  48: px(48),
  56: px(56),
  60: px(60),
  72: px(72),
  64: px(64),
  80: px(80),
  88: px(88),
  96: px(96),
  120: px(120),
  160: px(160),
  300: px(300),
  380: px(380),
  335: px(335),
  400: px(400),
  480: px(480),
  600: px(600),
  620: px(620),
  700: px(700),
  740: px(740),
  960: px(960),
  1120: px(1120),
  1350: px(1350),
  auto: "auto",
};

const weight = {
  regular: "400",
  strong: "700",
};

const border = {
  width: {
    "4": px(4),
    "8": px(8),
  },
  radius: {
    "8": px(8),
    "16": px(16),
    "28": px(28),
    full: "9999px",
  },
};

export const vars = createGlobalTheme(":root", {
  spacing,
  weight,
  border,
});

export const colorVars = createThemeContract({
  palette,
  semantics: {
    primary: "",
    primary100: "",
    primary600: "",
    secondary: "",
    secondary100: "",
    secondary600: "",
    paper: "",
  },
});

createGlobalTheme(":root", colorVars, {
  palette,
  semantics: lightModeSemanticColors,
});

// createGlobalTheme(`:root${darkMode}`, colorVars, {
//   palette,
//   semantics: darkModeSemanticColors,
// });
