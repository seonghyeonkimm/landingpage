import { style } from "@vanilla-extract/css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { recipe } from "@vanilla-extract/recipes";

import { sprinkles } from "src/styles/sprinkles.css";
import { colorVars } from "src/styles/theme.css";

export const header = recipe({
  base: [
    {
      zIndex: 1,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
    },
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

export const wrapper = style([
  {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    maxWidth: 1440,
    margin: "auto",
  },

  sprinkles({
    paddingX: {
      mobile: 20,
      tablet: 40,
      desktop: 120,
    },
  }),
]);

export type HeaderVariants = RecipeVariants<typeof header>;
