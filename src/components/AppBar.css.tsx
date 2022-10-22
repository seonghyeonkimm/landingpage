import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "src/styles/sprinkles.css";

import { colorVars } from "src/styles/theme.css";

export const header = recipe({
  base: [
    {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: 80,
      zIndex: 1,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
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
        background: colorVars.semantics.paper,
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.1)",
      },
    },
  },
});

export type HeaderVariants = RecipeVariants<typeof header>;
