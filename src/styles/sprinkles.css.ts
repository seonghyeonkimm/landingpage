import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

import { breakpoints, vars } from "./theme.css";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": `screen and (min-width: ${breakpoints.tablet}px)` },
    desktop: { "@media": `screen and (min-width: ${breakpoints.desktop}px)` },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr 1fr"],
    gap: vars.spacing,

    fontSize: vars.spacing,
    lineHeight: vars.spacing,
    letterSpacing: ["-0.02em", "-0.01em", "0.01em", "0.02em"],
    textAlign: ["left", "center", "right"],

    width: vars.spacing,
    maxWidth: vars.spacing,
    height: vars.spacing,

    paddingTop: vars.spacing,
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    marginTop: vars.spacing,
    marginBottom: vars.spacing,
    marginLeft: vars.spacing,
    marginRight: vars.spacing,
  },
  shorthands: {
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

export const sprinkles = createSprinkles(responsiveProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];
