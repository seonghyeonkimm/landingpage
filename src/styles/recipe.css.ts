import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "./sprinkles.css";
import { vars } from "./theme.css";
import { px } from "./utils";

export const Typography = recipe({
  base: {},
  variants: {
    bold: {
      true: {
        fontWeight: vars.weight.strong,
      },
    },
    variant: {
      display2xl: sprinkles({
        fontSize: {
          tablet: 64,
          mobile: 36,
        },
        lineHeight: {
          tablet: 80,
          mobile: 48,
        },
        letterSpacing: {
          tablet: "-0.02em",
          mobile: "-0.01em",
        },
      }),
      displayxl: {
        fontSize: px(56),
        lineHeight: px(72),
        letterSpacing: "-0.01em",
      },
      displaylg: {
        fontSize: px(48),
        lineHeight: px(60),
        letterSpacing: "-0.01em",
      },
      displaymd: sprinkles({
        fontSize: {
          mobile: 36,
          tablet: 48,
          desktop: 56,
        },
        lineHeight: {
          mobile: 48,
          tablet: 60,
          desktop: 72,
        },
        letterSpacing: {
          mobile: "-0.01em",
        },
      }),
      displaysm: {
        fontSize: px(30),
        lineHeight: px(40),

        letterSpacing: "-0.01em",
      },
      displayxs: {
        fontSize: px(24),
        lineHeight: px(32),
        letterSpacing: "-0.01em",
      },
      bodyxl: sprinkles({
        fontSize: {
          mobile: 20,
          tablet: 24,
        },
        lineHeight: {
          mobile: 28,
          tablet: 32,
        },
        letterSpacing: "0.01em",
      }),
      bodylg: sprinkles({
        fontSize: {
          tablet: 18,
          mobile: 16,
        },
        lineHeight: {
          tablet: 28,
          mobile: 24,
        },
        letterSpacing: "0.01em",
      }),
      bodymd: sprinkles({
        fontSize: {
          mobile: 16,
          tablet: 18,
        },
        lineHeight: {
          mobile: 24,
          tablet: 28,
        },
        letterSpacing: {
          mobile: "-0.01em",
        },
      }),
      bodysm: sprinkles({
        fontSize: {
          mobile: 14,
          tablet: 16,
        },
        lineHeight: {
          mobile: 20,
          tablet: 24,
        },
        letterSpacing: {
          mobile: "-0.01em",
        },
      }),
      bodyxs: {
        fontSize: px(12),
        lineHeight: px(16),
        letterSpacing: "0.01em",
      },
    },
  },
});

export type TypographyVariants = RecipeVariants<typeof Typography>;
