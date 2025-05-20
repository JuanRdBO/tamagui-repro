import React, { memo, useCallback, useMemo } from "react";
import { FlatList, RefreshControl, StyleSheet } from "react-native";
import { getTokens } from "tamagui";
import { DashboardAssets } from "./DashboardAssets";
import { DashboardHeader } from "./DashboardHeader";

type DashboardSection = "header" | "assets";

export const DashboardContent = memo((): React.JSX.Element => {
  const renderItem = useCallback(({ item }: { item: DashboardSection }) => {
    if (item === "header") return <DashboardHeader />;
    if (item === "assets") return <DashboardAssets />;
    else return null;
  }, []);

  const keyExtractor = useCallback((item: DashboardSection) => item, []);
  const dashboardSections = useMemo<DashboardSection[]>(() => ["header", "assets"], []);

  return (
    <FlatList
      data={dashboardSections}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={{ backgroundColor: "#f9f9f9", paddingBottom: getTokens().space[6].val }}
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic"
      refreshControl={<RefreshControl refreshing={false} style={styles.refreshControl} />}
    />
  );
});

const styles = StyleSheet.create({
  refreshControl: {
    zIndex: 1,
  },
});
