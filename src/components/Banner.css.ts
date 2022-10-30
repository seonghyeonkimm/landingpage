import { style } from "@vanilla-extract/css";

import { Typography } from "src/styles/recipe.css";
import { sprinkles } from "src/styles/sprinkles.css";
import { colorVars, mediaDesktop, vars } from "src/styles/theme.css";

export const article = style([
  { overflow: "hidden", position: "relative" },
  sprinkles({
    textAlign: {
      mobile: "center",
      desktop: "left",
    },
    paddingTop: {
      mobile: 48,
      desktop: 0,
    },
    marginX: {
      mobile: 20,
      tablet: 40,
      desktop: 120,
    },
    marginBottom: {
      mobile: 48,
      desktop: 160,
    },
    display: {
      desktop: "flex",
    },
    placeItems: {
      desktop: "center",
    },
    gap: {
      desktop: 32,
    },
    height: {
      desktop: 380,
    },
  }),
]);

export const h2 = style([
  { marginBottom: 16 },
  Typography({
    variant: "displaymd",
    bold: true,
  }),
]);

export const p = style([Typography({ variant: "bodymd" })]);

export const image = style([{ marginTop: 40, maxWidth: 592, width: "100%" }]);

export const circle = style([
  {
    borderRadius: vars.border.radius.full,
    background: colorVars.semantics.secondary,
    position: "absolute",
    zIndex: -1,
    top: 0,
    transform: "translate(-50%, -50%)",
    left: "50%",

    "@media": {
      [`${mediaDesktop}`]: {
        left: 0,
        transform: "translate(0, -50%)",
      },
    },
  },
  sprinkles({
    width: {
      mobile: 300,
      tablet: 620,
      desktop: 740,
    },
    height: {
      mobile: 300,
      tablet: 620,
      desktop: 740,
    },
  }),
]);
