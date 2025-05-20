import SelectLanguageScreen from "@/features/userProfile/components/GeneralSettingsScreen/SelectLanguageScreen";
import React from "react";
import { View } from "tamagui";

export default function SelectLanguage(): React.ReactNode {
  return (
    <View flex={1} backgroundColor={"#f9f9f9"}>
      <SelectLanguageScreen />
    </View>
  );
}
