import { Stack } from "expo-router";
import { memo } from "react";

const MainLayout = memo(() => (
  <Stack
    screenOptions={{
      headerShown: false,
      contentStyle: { backgroundColor: "transparent" },
    }}
  />
));

export default MainLayout;
