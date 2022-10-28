import { sprinkles } from "src/styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

import { colorVars, mediaDesktop, vars } from "src/styles/theme.css";
import { Typography } from "src/styles/recipe.css";

export const article = style([
  {
    background: colorVars.palette.neutral900,
    paddingTop: 64,
    paddingBottom: 40,
  },
  sprinkles({
    paddingX: {
      mobile: 20,
      tablet: 40,
      desktop: 120,
    },
  }),
]);

export const section = style([
  {
    textAlign: "center",
    maxWidth: 800,
    margin: "auto",
  },
]);

export const h3 = style([
  { marginBottom: 16, color: colorVars.semantics.paper },
  Typography({
    variant: "displaysm",
    bold: true,
  }),
]);

export const p = style([
  Typography({ variant: "bodymd" }),
  { marginBottom: 40, color: colorVars.semantics.paper },
]);

export const button = style([{ margin: "auto" }]);

export const footer = style([
  {
    marginTop: 64,
  },
]);

export const lineWrapper = style([
  {
    display: "flex",
    alignItems: "center",
    position: "relative",
    height: 48,
    marginBottom: 24,
  },
]);

export const symbol = style([
  {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
  },
]);

export const line = style([
  {
    width: "100%",
    height: 1,
    background: colorVars.palette.white,
    opacity: 0.1,
    zIndex: 1,
  },
]);

export const copyRightWrapper = style([
  {
    textAlign: "center",
  },
  sprinkles({
    display: {
      desktop: "flex",
    },
    justifyContent: {
      desktop: "space-between",
    },
  }),
]);

export const copyRight = style([
  {
    color: colorVars.palette.neutral400,
  },
  Typography({ variant: "bodysm" }),
]);

export const highlight = style({
  color: colorVars.semantics.primary100,
});

export const firstCopyRight = sprinkles({
  marginBottom: {
    mobile: 16,
    desktop: 0,
  },
});
