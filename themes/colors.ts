export const staticColors = {
  white: "#ffffff",
  black: "#090909",
  brightYellow: "#FCEE54",
};

export const grayLight = {
  gray1: "#fcfcfc",
  gray2: "#f9f9f9",
  gray3: "#f0f0f0",
  gray4: "#e8e8e8",
  gray5: "#e0e0e0",
  gray6: "#d9d9d9",
  gray7: "#cecece",
  gray8: "#bbbbbb",
  gray9: "#8d8d8d",
  gray10: "#838383",
  gray11: "#646464",
  gray12: "#202020",
};

export const grayDark = {
  gray1: "#111111",
  gray2: "#191919",
  gray3: "#222222",
  gray4: "#2a2a2a",
  gray5: "#313131",
  gray6: "#3a3a3a",
  gray7: "#484848",
  gray8: "#606060",
  gray9: "#6e6e6e",
  gray10: "#7b7b7b",
  gray11: "#b3b3b3",
  gray12: "#eeeeee",
};

export const purpleLight = {
  purple1: "#E1D0F6",
  purple2: "#d7b5ff",
  purple3: "#d2abff",
  purple4: "#cb9eff",
  purple5: "#c28eff",
  purple6: "#b778ff",
  purple7: "#a75aff",
  purple8: "#9539fd",
  purple9: "#650bc8",
  purple10: "#5d10af",
  purple11: "#5b10a9",
  purple12: "#1f043b",
};

export const purpleDark = {
  purple1: "#18111b",
  purple2: "#1e1523",
  purple3: "#301c3b",
  purple4: "#3d224e",
  purple5: "#48295c",
  purple6: "#9539fd",
  purple7: "#a75aff",
  purple8: "#b778ff",
  purple9: "#c28eff",
  purple10: "#cb9eff",
  purple11: "#d19dff",
  purple12: "#ecd9fa",
};

export const redLight = {
  red1: "#fffcfc",
  red2: "#fff7f7",
  red3: "#feebec",
  red4: "#ffdbdc",
  red5: "#ffcdce",
  red6: "#fdbdbe",
  red7: "#f4a9aa",
  red8: "#eb8e90",
  red9: "#e5484d",
  red10: "#dc3e42",
  red11: "#ce2c31",
  red12: "#641723",
};

export const redDark = {
  red1: "#191111",
  red2: "#201314",
  red3: "#3b1219",
  red4: "#500f1c",
  red5: "#611623",
  red6: "#72232d",
  red7: "#8c333a",
  red8: "#b54548",
  red9: "#e5484d",
  red10: "#ec5d5e",
  red11: "#ff9592",
  red12: "#ffd1d9",
};

export const greenLight = {
  green1: "#fbfefc",
  green2: "#f4fbf6",
  green3: "#e6f6eb",
  green4: "#d6f1df",
  green5: "#c4e8d1",
  green6: "#adddc0",
  green7: "#8eceaa",
  green8: "#5bb98b",
  green9: "#30a46c",
  green10: "#2b9a66",
  green11: "#218358",
  green12: "#193b2d",
};

export const greenDark = {
  green1: "#0e1512",
  green2: "#121b17",
  green3: "#132d21",
  green4: "#113b29",
  green5: "#174933",
  green6: "#20573e",
  green7: "#28684a",
  green8: "#2f7c57",
  green9: "#30a46c",
  green10: "#33b074",
  green11: "#3dd68c",
  green12: "#b1f1cb",
};

export const semanticLight = {
  // Background
  bgCanvas: grayLight.gray2,
  bgDefault: staticColors.white,
  bgSubtle: grayLight.gray3,
  bgMuted: grayLight.gray4,
  bgEmphasized: grayLight.gray5,

  // Foreground
  fgDefault: staticColors.black,
  fgMuted: grayLight.gray11,
  fgSubtle: grayLight.gray10,
  fgDisabled: grayLight.gray9,

  // Brand
  brandPrimary: purpleLight.purple12,
  brandEmphasized: purpleLight.purple11,
  brandDefault: purpleLight.purple7,
  brandSubtle: purpleLight.purple1,
  brandOnPrimary: staticColors.white,
  brandOnDefault: staticColors.white,

  // Error
  errorSubtle: redLight.red3,
  errorDefault: redLight.red9,
  errorEmphasized: redLight.red11,
  errorOnDefault: staticColors.white,

  // Success
  successSubtle: greenLight.green4,
  successDefault: greenLight.green9,
  successEmphasized: greenLight.green11,
  successOnDefault: staticColors.white,

  // Border
  borderDefault: grayLight.gray7,
  borderMuted: grayLight.gray5,
  borderSubtle: grayLight.gray3,
};

export const semanticDark = {
  // Background
  bgCanvas: staticColors.black,
  bgDefault: grayDark.gray2,
  bgSubtle: grayDark.gray3,
  bgMuted: grayDark.gray4,
  bgEmphasized: grayDark.gray6,

  // Foreground
  fgDefault: staticColors.white,
  fgMuted: grayDark.gray11,
  fgSubtle: grayDark.gray10,
  fgDisabled: grayDark.gray9,

  // Brand
  brandPrimary: staticColors.brightYellow,
  brandEmphasized: purpleDark.purple5,
  brandDefault: purpleDark.purple7,
  brandSubtle: purpleDark.purple12,

  // Foreground on-brand
  brandOnPrimary: staticColors.black,
  brandOnDefault: staticColors.white,

  // Error
  errorSubtle: redDark.red3,
  errorDefault: redDark.red9,
  errorEmphasized: redDark.red11,
  errorOnDefault: staticColors.white,

  // Success
  successSubtle: greenDark.green4,
  successDefault: greenDark.green9,
  successEmphasized: greenDark.green11,
  successOnDefault: staticColors.white,

  // Border
  borderDefault: grayDark.gray7,
  borderMuted: grayDark.gray5,
  borderSubtle: grayDark.gray3,
};
