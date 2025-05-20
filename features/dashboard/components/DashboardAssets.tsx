import { Text } from "@/components/Text";
import * as i18n from "@/locales";
import React, { memo, useCallback, useMemo } from "react";
import { FlatList } from "react-native";
import { getTokens, XStack, YStack } from "tamagui";
import { DashboardAssetCard, DashboardAssetCardProps } from "./DashboardAssetCard";
import { Coins, TrendingUp } from "@tamagui/lucide-icons";
import { Image } from "expo-image";

const cardWidth = 172;
const gap = 6;

export const DashboardAssets = memo((): React.JSX.Element => {
  const data: DashboardAssetCardProps[] = useMemo(() => {
    return [
      {
        id: "usd",
        icon: (
          <Image
            source={{ uri: "https://hatscripts.github.io/circle-flags/flags/us.svg" }}
            style={{ width: 35, height: 35 }}
            contentFit="contain"
          />
        ),
        subTitle: i18n.t(i18n.l.currency_name_usd_short),
        amount: 26.57,
        to: "/stacks/assets/assetsList",
      },
      {
        id: "investments",
        icon: (
          <XStack
            alignItems="center"
            justifyContent="center"
            backgroundColor="#e0e0e0"
            width={35}
            height={35}
          >
            <TrendingUp size={20} color="#090909" />
          </XStack>
        ),
        subTitle: i18n.t(i18n.l.investments),
        amount: 1232.95,
        to: "/stacks/investment/luloDashboard",
        interest: 0.1,
      },
      {
        id: "crypto",
        icon: (
          <XStack
            alignItems="center"
            justifyContent="center"
            // @TODO: Use theme color
            backgroundColor="#A3ABE3"
            width={35}
            height={35}
          >
            <Coins width={20} height={20} />
          </XStack>
        ),
        subTitle: i18n.t(i18n.l.crypto),
        amount: 18645.9,
        to: "/stacks/assets/assetsList",
      },
    ];
  }, []);

  const keyExtractor = useCallback((item: (typeof data)[number]) => item.id, []);
  const renderItem = useCallback(({ item }: { item: (typeof data)[number] }) => {
    return <DashboardAssetCard {...item} />;
  }, []);

  const snapToInterval = useMemo(() => cardWidth + gap, []);

  if (data.length === 0) return <></>;
  return (
    <YStack mt="$6" gap="$2">
      <Text px="$4.5" variant="titleMedium" color="#646464">
        {i18n.t(i18n.l.accounts)}
      </Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={keyExtractor}
        contentContainerStyle={{
          paddingHorizontal: getTokens().space["4.5"].val,
          gap: getTokens().space[2].val,
        }}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        snapToInterval={snapToInterval}
        decelerationRate="fast"
        snapToAlignment="start"
      />
    </YStack>
  );
});
