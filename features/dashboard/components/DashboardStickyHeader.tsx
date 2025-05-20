import { ProfileCard } from "@/features/userProfile";
import React from "react";
import { View, XStack } from "tamagui";
import { Scan } from "@tamagui/lucide-icons";

export const DashboardStickyHeader = (): React.JSX.Element => {
  return (
    <XStack px="$4.5" bg="#ffffff">
      <ProfileCard />
      <View justifyContent="center" alignItems="center" px="$2.5" ml="auto">
        <Scan size={25} color="#090909" />
      </View>
    </XStack>
  );
};
