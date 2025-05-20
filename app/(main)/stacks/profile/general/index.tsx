import { GeneralSettingsScreen } from "@/features/userProfile/components/GeneralSettingsScreen";
import React from "react";
import { View } from "tamagui";

export default function SelectSetting(): React.ReactNode {
  return (
    <View flex={1} paddingTop={20} backgroundColor={"#f9f9f9"} paddingBottom={100}>
      <GeneralSettingsScreen />
    </View>
  );
}
