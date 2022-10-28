import { globalStyle } from "@vanilla-extract/css";

import { colorVars } from "./theme.css";

// globalStyle(`${darkMode}`, {
//   background: colorVars.palette.black,
//   color: colorVars.palette.gray50,
//   colorScheme: "dark",
// });

globalStyle("html", {
  background: colorVars.semantics.paper,
  color: colorVars.palette.gray900,
  boxSizing: "border-box",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "inherit",
});

globalStyle("h1, h2, p", {
  margin: 0,
});

globalStyle("button", {
  border: "none",
});

globalStyle("img", {
  maxWidth: "100%",
  height: "auto",
});
