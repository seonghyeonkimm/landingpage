import { style } from "@vanilla-extract/css";

export const section = style([
  {
    overflow: "hidden",
    paddingTop: 80,
    "@media": { "screen and (min-width: 1548px)": { overflow: "unset" } },
  },
]);
