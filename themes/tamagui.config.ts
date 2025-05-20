import { shorthands } from "@tamagui/shorthands";
import { createFont, createTamagui } from "tamagui";
import { defaultConfig } from "@tamagui/config/v4";
import { tokens } from "./tokens";
import { themes } from "./themes";
const generalSansFont = createFont({
  family: "GeneralSans",
  size: {
    1: 11,
    2: 12,
    3: 13,
    4: 14,
    true: 14,
    5: 16,
    6: 18,
    7: 20,
    8: 23,
    9: 30,
    10: 46,
    11: 55,
    12: 62,
    13: 72,
    14: 92,
    15: 114,
    16: 134,
  },
  weight: {
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
    7: 700,
    8: 800,
    9: 900,
  },
  face: {
    100: {
      normal: "GeneralSansRegular",
    },
    200: {
      normal: "GeneralSansRegular",
    },
    300: {
      normal: "GeneralSansRegular",
    },
    400: {
      normal: "GeneralSansMedium",
    },
    500: {
      normal: "GeneralSansMedium",
    },
    600: {
      normal: "GeneralSansSemibold",
    },
    700: {
      normal: "GeneralSansBold",
    },
    800: {
      normal: "GeneralSansBold",
    },
    900: {
      normal: "GeneralSansBold",
    },
  },
});

const dmMonoFont = createFont({
  family: "DmMono",
  size: {
    1: 11,
    2: 12,
    3: 13,
    4: 14,
    true: 14,
    5: 16,
    6: 18,
    7: 20,
    8: 23,
    9: 30,
    10: 46,
    11: 55,
    12: 62,
    13: 72,
    14: 92,
    15: 114,
    16: 134,
  },
  face: {
    400: {
      normal: "DmMonoMedium",
    },
  },
});

const appConfig = createTamagui({
  ...defaultConfig,
  defaultTheme: "dark",
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,

  fonts: {
    heading: generalSansFont,
    body: generalSansFont,
    mono: dmMonoFont,
  },
  tokens,
  themes,
  settings: {
    defaultFont: "body",
  },
});

export type AppConfig = typeof appConfig;

declare module "tamagui" {
  // or '@tamagui/core'
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
