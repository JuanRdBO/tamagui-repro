import { grayDark, grayLight, purpleDark, purpleLight, semanticDark } from "./colors";

import { semanticLight } from "./colors";

export const themes = {
  light: {
    /**
     * THESE TOKENS ARE DEPRECATED - USE SEMANTIC TOKENS INSTEAD
     */
    outline: "#BDBDBD",
    outlineVariant: "#A8A8A8",
    shadow: "#b9b9b9",
    scrim: "#000000",
    inversePrimary: "#D1BCFF",
    warning: "#FFC107",
    onWarning: "#000000",
    warningContainer: "#3E3400",
    onWarningContainer: "#FFD54F",
    success: "#4CAF50",
    onSuccess: "#FFFFFF",
    successContainer: "#E8F5E9",
    successContainerDark: "#B9E9B9",
    onSuccessContainer: "#1B5E20",
    inputLabel: "#6F6F6F",
    lightGrayBackground: "#E0E0E0",

    elevation_level0: "transparent",
    elevation_level1: "#F4F4F4",
    elevation_level2: "#F4E8FF",
    elevation_level3: "#C6C6C6",
    elevation_level4: "#EEDFFF",
    elevation_level5: "#EBDAFF",

    surfaceDisabled: "rgba(28, 27, 30, 0.12)",
    onSurfaceDisabled: "rgba(28, 27, 30, 0.38)",
    backdrop: "rgba(50, 47, 55, 0.4)",
    invertText: "#FFFFFF",
    dotAccent: "#E5E5E5",
    tabActive: "#271244",
    tabInactive: "#4A4A4A",
    androidTabActive: "#E7E7E7",
    androidTabBackground: "#FFFFFF",
    homeButtonPrimary: "#271244",
    cardBorder: "#00000040",
    liveBadge: "#0EAD69",
    separator: "#E7E7E7",
    androidTextSelection: "#6F5A984D",

    ...semanticLight,
    ...grayLight,
    ...purpleLight,
  },
  dark: {
    /**
     * THESE TOKENS ARE DEPRECATED - USE SEMANTIC TOKENS INSTEAD
     */
    outline: "#948F99",
    outlineVariant: "#49454E",
    shadow: "#000000",
    scrim: "#000000",
    inversePrimary: "#7212FF",
    warning: "#FFD700",
    onWarning: "#000000",
    warningContainer: "#524700",
    onWarningContainer: "#FFE97D",
    success: "#81C784",
    onSuccess: "#1B5E20",
    successContainer: "#2E7D32",
    successContainerDark: "#B9E9B9",
    onSuccessContainer: "#E8F5E9",
    inputLabel: "#CCCCCC",
    lightGrayBackground: "#303030",

    elevation_level0: "transparent",
    elevation_level1: "#252329",
    elevation_level2: "#2B2830",
    elevation_level3: "#302D37",
    elevation_level4: "#322E39",
    elevation_level5: "#35323E",

    surfaceDisabled: "rgba(230, 225, 230, 0.12)",
    onSurfaceDisabled: "rgba(230, 225, 230, 0.38)",
    backdrop: "rgba(50, 47, 55, 0.4)",
    invertText: "#090909",
    dotAccent: "#FFFFFF",
    tabActive: "#FFFFFF",
    tabInactive: "#CBCBCB",
    androidTabActive: "#1B1B1B",
    androidTabBackground: "#090909",
    homeButtonPrimary: "#FCEE54",
    cardBorder: "#FFFFFF40",
    liveBadge: "#0EAD69",
    separator: "#4A4A4A",
    androidTextSelection: "#BE8CFF4D",

    ...semanticDark,
    ...grayDark,
    ...purpleDark,
  },
} as const;

export const shadows = {
  level1: {
    shadowColor: themes.light.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
};
