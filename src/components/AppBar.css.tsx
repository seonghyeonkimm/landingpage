import { style } from "@vanilla-extract/css";

import { sprinkles } from "src/styles/theme.css";

export const header = style([
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
]);
