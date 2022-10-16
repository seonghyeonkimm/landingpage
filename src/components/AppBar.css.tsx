import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

import { sprinkles, vars } from "src/styles/theme.css";

export const header = recipe({
  base: [
    {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: 80,
      zIndex: 1,
      position: "sticky",
      top: 0,
    },
    sprinkles({
      paddingX: {
        mobile: 20,
        tablet: 40,
        desktop: 120,
      },
    }),
  ],
  variants: {
    scroll: {
      true: {
        background: vars.palette.white,
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.1)",
      },
    },
  },
});

export type HeaderVariants = RecipeVariants<typeof header>;
