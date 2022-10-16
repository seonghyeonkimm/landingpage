import { style } from "@vanilla-extract/css";

import { sprinkles } from "src/styles/theme.css";

export const header = style([
  sprinkles({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingX: {
      mobile: 20,
      tablet: 40,
      desktop: 120,
    },
  }),
  {
    height: 80,
  },
]);
