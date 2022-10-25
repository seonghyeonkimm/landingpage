import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { Typography } from "src/styles/recipe.css";
import { sprinkles } from "src/styles/sprinkles.css";
import { colorVars, vars } from "src/styles/theme.css";

export const article = style([
  { textAlign: "center" },
  sprinkles({
    marginTop: {
      mobile: 48,
      tablet: 96,
    },
    marginBottom: {
      mobile: 48,
      tablet: 96,
    },
    paddingX: {
      mobile: 20,
      tablet: 40,
      desktop: 120,
    },
  }),
]);

export const h1 = style([
  Typography({
    variant: "displaymd",
    bold: true,
  }),
  { color: colorVars.palette.neutral900, marginBottom: 8 },
]);

export const p = style([
  Typography({
    variant: "bodymd",
  }),
  { color: colorVars.palette.neutral700, marginBottom: 48 },
]);

export const imageWrapper = style([
  {
    position: "relative",
  },
  Typography({ variant: "bodysm" }),
]);

export const image = style([{ borderRadius: 6 }]);

export const playIcon = style([
  { marginTop: 1 },
  sprinkles({
    marginRight: {
      mobile: 12,
    },
  }),
]);

export const playButton = style([
  {
    position: "absolute",
    left: "50%",
    bottom: 0,
    transform: "translate(-50%, 50%)",
    background: colorVars.palette.white,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: colorVars.palette.neutral900,
    width: "max-content",
    boxShadow: "0px 8px 16px -4px rgba(28, 44, 64, 0.08)",
  },
  sprinkles({
    paddingX: {
      mobile: 12,
      tablet: 20,
    },
    height: {
      mobile: 44,
      tablet: 56,
    },
  }),
]);

export const featureWrapper = style([
  {
    display: "grid",
  },
  sprinkles({
    marginTop: {
      mobile: 48,
      tablet: 88,
    },
    gridTemplateColumns: {
      mobile: "1fr",
      tablet: "1fr 1fr",
      desktop: "1fr 1fr 1fr",
    },
    gap: {
      tablet: 32,
    },
  }),
]);

export const feature = style([
  sprinkles({
    textAlign: {
      tablet: "center",
    },
    paddingY: {
      mobile: 24,
    },
    display: {
      mobile: "flex",
      tablet: "block",
    },
  }),
]);

export const featureContent = style([
  sprinkles({
    paddingX: {
      desktop: 24,
    },
    textAlign: {
      mobile: "left",
      tablet: "center",
    },
  }),
]);

export const featureIcon = recipe({
  base: [
    {
      flexShrink: 0,

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      border: "8px solid",
      borderColor: colorVars.semantics.primary100,
      borderRadius: vars.border.radius.full,

      color: colorVars.semantics.primary600,
    },
    sprinkles({
      marginLeft: {
        tablet: "auto",
      },
      marginRight: {
        mobile: 16,
        tablet: "auto",
      },
      marginBottom: {
        tablet: 24,
      },
      width: {
        mobile: 56,
        tablet: 88,
      },
      height: {
        mobile: 56,
        tablet: 88,
      },
    }),
  ],
  variants: {
    variant: {
      secondary: {
        color: colorVars.semantics.secondary600,
        borderColor: colorVars.semantics.secondary100,
      },
    },
  },
});

export type FeatureIconVariants = RecipeVariants<typeof featureIcon>;

export const featureTitle = style([
  Typography({
    variant: "bodyxl",
  }),
  { color: colorVars.palette.neutral900, marginBottom: 8 },
]);

export const featureDesc = style([
  Typography({
    variant: "bodysm",
  }),
  { color: colorVars.palette.neutral700 },
]);
