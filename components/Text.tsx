import { styled, Text as TamaguiText } from "tamagui";

export type TypographyVariant =
  | "displayLarge"
  | "displayMedium"
  | "displaySmall"
  | "headlineLarge"
  | "headlineMedium"
  | "headlineSmall"
  | "titleLarge"
  | "titleMedium"
  | "titleSmall"
  | "labelLarge"
  | "labelMedium"
  | "labelSmall"
  | "bodyLarge"
  | "bodyMedium"
  | "bodySmall";

// Create a styled Text component using Tamagui
export const Text = styled(TamaguiText, {
  name: "Text",
  fontFamily: "$body",
  color: "#090909",
  variants: {
    variant: {
      /**
       * DEPRECATED - Use semantic tokens instead
       */
      displayLarge: { fontSize: 57, fontFamily: "$body" },
      displayMedium: { fontSize: 45, fontFamily: "$body" },
      displaySmall: { fontSize: 36, fontFamily: "$body" },
      headlineLarge: { fontSize: 32, fontFamily: "$body" },
      headlineMedium: { fontSize: 28, fontFamily: "$body" },
      headlineSmall: { fontSize: 24, fontFamily: "$body" },
      titleLarge: { fontSize: 22, fontFamily: "$heading" },
      titleMedium: { fontSize: 16, fontFamily: "$heading" },
      titleSmall: { fontSize: 14, fontFamily: "$heading" },
      labelLarge: { fontSize: 14, fontFamily: "$heading" },
      labelMedium: { fontSize: 12, fontFamily: "$heading" },
      labelSmall: { fontSize: 11, fontFamily: "$heading" },
      bodyLarge: { fontSize: 16, fontFamily: "$body" },
      bodyMedium: { fontSize: 14, fontFamily: "$body" },
      bodySmall: { fontSize: 12, fontFamily: "$body" },

      /**
       * Use this instead
       */
      caption2xsRegular: { fontSize: 10, fontFamily: "$body", fontWeight: "400" },
      captionXsRegular: { fontSize: 12, fontFamily: "$body", fontWeight: "400" },
      textSmRegular: { fontSize: 14, fontFamily: "$body", fontWeight: "400" },
      textMdRegular: { fontSize: 16, fontFamily: "$body", fontWeight: "400" },
      labelSmMedium: { fontSize: 14, fontFamily: "$heading", fontWeight: "600" },
      labelMdMedium: { fontSize: 16, fontFamily: "$heading", fontWeight: "600" },
      labelLgMedium: { fontSize: 18, fontFamily: "$heading", fontWeight: "600" },
      subheadingLgBold: { fontSize: 18, fontFamily: "$heading", fontWeight: "700" },
      subheadingXlBold: { fontSize: 22, fontFamily: "$heading", fontWeight: "700" },
      heading3xlSemibold: { fontSize: 28, fontFamily: "$heading", fontWeight: "600" },
      heading4xlRegular: { fontSize: 32, fontFamily: "$heading", fontWeight: "400" },
      heading4xlSemibold: { fontSize: 32, fontFamily: "$heading", fontWeight: "600" },
      heading4xlBold: { fontSize: 32, fontFamily: "$heading", fontWeight: "700" },
      heading5xlSemibold: { fontSize: 36, fontFamily: "$heading", fontWeight: "600" },
    },
  },
  defaultVariants: {
    variant: "bodyMedium",
  },
});
