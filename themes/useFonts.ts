import { useFonts as useFonts_ } from "expo-font";

export default function useFonts(): boolean {
  const [fontsLoaded] = useFonts_({
    GeneralSansRegular: require("@assets/fonts/general-sans/GeneralSans-Regular.otf"),
    GeneralSansMedium: require("@assets/fonts/general-sans/GeneralSans-Medium.otf"),
    GeneralSansSemibold: require("@assets/fonts/general-sans/GeneralSans-Semibold.otf"),
    GeneralSansBold: require("@assets/fonts/general-sans/GeneralSans-Bold.otf"),
    DmMonoMedium: require("@assets/fonts/dm-mono/DMMono-Medium.ttf"),
    DmMonoRegular: require("@assets/fonts/dm-mono/DMMono-Regular.ttf"),
  });
  return fontsLoaded;
}
