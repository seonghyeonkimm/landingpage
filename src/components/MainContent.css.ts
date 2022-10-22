import { style } from "@vanilla-extract/css";
import { Typography } from "src/styles/recipe.css";
import { sprinkles } from "src/styles/sprinkles.css";
import { colorVars, mediaDesktop, vars } from "src/styles/theme.css";

export const main = style([
  sprinkles({
    marginTop: {
      mobile: 48,
      tablet: 80,
      desktop: 32,
    },
    paddingX: {
      mobile: 20,
      tablet: 40,
      desktop: 120,
    },
  }),
]);

export const article = sprinkles({
  display: {
    desktop: "flex",
  },
  justifyContent: {
    desktop: "space-between",
  },
  alignItems: {
    desktop: "center",
  },
});

export const leftContainer = sprinkles({
  marginRight: {
    desktop: 32,
  },
});

export const h1 = Typography({
  variant: "display2xl",
  bold: true,
});

export const p = style([
  Typography({
    variant: "bodylg",
  }),
  { marginTop: 16 },
]);

export const button = style({
  marginTop: 40,
});

export const rightContainer = style([
  { position: "relative" },
  sprinkles({
    marginX: "auto",
    maxWidth: {
      desktop: 600,
      tablet: 740,
      mobile: 335,
    },
    marginTop: {
      tablet: 64,
      mobile: 88,
    },
  }),
]);

export const circle = style([
  {
    borderRadius: vars.border.radius.full,
    background: colorVars.semantics.secondary,
    position: "absolute",
    top: "-20%",
    left: "15%",
    zIndex: -1,

    "@media": {
      [`${mediaDesktop}`]: {
        top: "-50%",
      },
    },
  },
  sprinkles({
    width: {
      tablet: 700,
      mobile: 400,
    },
    height: {
      tablet: 700,
      mobile: 400,
    },
  }),
]);
