import { Stack } from "expo-router";

export default function Navigator(): React.JSX.Element {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: "#f9f9f9" } }}>
      <Stack.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
