import React from "react";
import { LanguagesList } from "./components/LanguagesList";
import { YStack } from "tamagui";
export default function SelectLanguageScreen(): React.ReactNode {
  return (
    <YStack gap={20} padding={20} flex={1} backgroundColor={"#f9f9f9"}>
      <LanguagesList searchQuery="" />
    </YStack>
  );
}
