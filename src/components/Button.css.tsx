import { colorVars, vars } from "src/styles/theme.css";

import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { Typography } from "src/styles/recipe.css";

export const button = recipe({
  base: [
    Typography({ variant: "bodysm", bold: true }),
    {
      height: 40,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: 16,
      paddingRight: 16,

      background: colorVars.semantics.primary,
      borderRadius: vars.border.radius[8],
      border: "none",

      color: colorVars.palette.white,

      selectors: {
        "&:hover": {
          opacity: 0.8,
        },
      },
    },
  ],

  variants: {
    size: {
      lg: [
        Typography({ variant: "bodymd", bold: true }),
        {
          height: 48,
        },
      ],
    },
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
