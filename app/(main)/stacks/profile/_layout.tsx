import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { ChevronLeft } from "@tamagui/lucide-icons";

export default function Navigator(): React.JSX.Element {
  const router = useRouter();
  const BackButton = (): React.ReactNode => (
    <TouchableOpacity onPressIn={router.back}>
      <ChevronLeft size={28} color={"#090909"} disabled />
    </TouchableOpacity>
  );

  return (
    <Stack>
      <Stack.Screen
        name="general"
        options={{
          headerShown: false,
          headerLeft: BackButton,
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#f9f9f9" },
        }}
      />
    </Stack>
  );
}
