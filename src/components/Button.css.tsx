import { vars } from "src/styles/theme.css";

import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,

    background: vars.palette.semantics.primary,
    borderRadius: vars.border.radius[8],
    border: "none",

    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: "0.01em",

    color: vars.palette.white,

    selectors: {
      "&:hover": {
        opacity: 0.8,
      },
    },
  },

  variants: {
    size: {
      lg: {
        height: 48,
        fontSize: 16,
        lineHeight: 24,
      },
    },
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
