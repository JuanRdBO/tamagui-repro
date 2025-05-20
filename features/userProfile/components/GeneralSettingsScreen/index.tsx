import { Card } from "@/components/Card";
import { router } from "expo-router";
import * as i18n from "@/locales";
import { Languages, ChevronRight } from "@tamagui/lucide-icons";
import { YStack } from "tamagui";

export const GeneralSettingsScreen = () => (
  <YStack gap="$6" flex={1}>
    <YStack flex={1} paddingHorizontal={20}>
      <Card
        title={i18n.t(i18n.l.language)}
        subtitle={i18n.t(i18n.l.change_language)}
        rightComponent={<ChevronRight height={25} width={25} color={"$outline"} />}
        leftComponent={<Languages height={25} width={25} color={"#646464"} />}
        onPress={() => router.navigate("/(main)/stacks/profile/general/selectLanguageScreen")}
      />
    </YStack>
  </YStack>
);
