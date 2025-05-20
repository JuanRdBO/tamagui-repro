import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import * as i18n from "@/locales";
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
        name="index"
        options={{
          title: i18n.t(i18n.l.general),
          headerShadowVisible: false,
          headerLeft: BackButton,
          headerStyle: { backgroundColor: "#f9f9f9" },
          headerTitleStyle: { color: "#090909" },
        }}
      />
      <Stack.Screen
        name="selectLanguageScreen"
        options={{
          title: i18n.t(i18n.l.language),
          headerShown: true,
          headerShadowVisible: false,
          headerLeft: BackButton,
          headerStyle: { backgroundColor: "#f9f9f9" },
          headerTitleStyle: { color: "#090909" },
        }}
      />
    </Stack>
  );
}
