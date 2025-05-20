import { Text, View, XStack, YStack } from "tamagui";

type pathname = "/stacks/investment/luloDashboard" | "/stacks/assets/assetsList";

export type DashboardAssetCardProps = {
  id: string;
  subTitle: string;
  amount: number;
  icon: React.ReactNode;
  to: pathname;
  interest?: number;
};

export const DashboardAssetCard = ({ id, subTitle, amount, icon, interest, to }: DashboardAssetCardProps) => {
  return (
    <View bg="#ffffff" borderRadius="$4" padding="$4" gap="$3" width={200}>
      <View width={35} height={35} overflow="hidden" borderRadius="$20">
        {icon}
      </View>

      <YStack gap="$1">
        <Text fontSize="$7" color="#090909" fontWeight="bold">
          {amount}
        </Text>
        <XStack justifyContent="space-between" alignItems="center">
          <Text color="#646464" fontSize="$4">
            {subTitle}
          </Text>
        </XStack>
      </YStack>
    </View>
  );
};
