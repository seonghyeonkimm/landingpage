import { style } from "@vanilla-extract/css";

export const section = style([
  {
    overflow: "hidden",
    paddingTop: 80,
    minWidth: 375,
    maxWidth: 1440,
    margin: "auto",
    "@media": { "screen and (min-width: 1548px)": { overflow: "unset" } },
  },
]);
