import { memo } from "react";
import { YStack } from "tamagui";
import { DashboardStickyHeader } from "./components/DashboardStickyHeader";
import { DashboardContent } from "./components/DashboardContent";

export const Dashboard = memo((): React.JSX.Element => {
  return (
    <YStack flex={1}>
      <DashboardStickyHeader />
      <DashboardContent />
    </YStack>
  );
});
