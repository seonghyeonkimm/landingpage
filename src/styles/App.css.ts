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
  fontFamily: "Noto Sans KR",
  boxSizing: "border-box",
  minWidth: 375,
});

globalStyle("*, *::before, *::after", {
  boxSizing: "inherit",
});
