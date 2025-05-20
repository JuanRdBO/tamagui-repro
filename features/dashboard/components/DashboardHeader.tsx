import React, { memo } from "react";
import { WalletBalance } from "@/features/wallet/components/WalletBalance";
import { ActionButton } from "@/components/ActionButton";
import { useRouter } from "expo-router";
import { ScrollView, View, XStack, YStack } from "tamagui";
import { DashboardBanners } from "./DashboardBanners";

import * as i18n from "@/locales";

import { Plus, Wallet, SendHorizontal, TrendingUp } from "@tamagui/lucide-icons";

export const DashboardHeader = memo((): React.JSX.Element => {
  const router = useRouter();

  return (
    <YStack gap="$4">
      <View
        bg="#ffffff"
        py="$5"
        gap="$7"
        borderBottomLeftRadius="$8"
        borderBottomRightRadius="$8"
        boxShadow="0px 12px 20px 0px #0000000D"
      >
        <View px="$5">
          <WalletBalance />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <XStack gap="$2" px="$5">
            <ActionButton variant="primary" icon={<Plus color="#FFFFFF" size={19} />}>
              {i18n.t(i18n.l.deposit)}
            </ActionButton>
            <ActionButton variant="secondary" icon={<Wallet size={19} />}>
              {i18n.t(i18n.l.withdraw)}
            </ActionButton>
            <ActionButton variant="secondary" icon={<SendHorizontal size={19} />}>
              {i18n.t(i18n.l.send)}
            </ActionButton>
            <ActionButton variant="secondary" icon={<TrendingUp size={19} />}>
              {i18n.t(i18n.l.invest)}
            </ActionButton>
          </XStack>
        </ScrollView>
      </View>

      <DashboardBanners />
    </YStack>
  );
});
