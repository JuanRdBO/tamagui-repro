import { Card } from "@/components/Card";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import * as i18n from "@/locales";
import { ChevronRight, Settings } from "@tamagui/lucide-icons";
import { View } from "tamagui";

export const ProfileScreenCards = () => {
  const router = useRouter();

  return (
    <View style={styles.cardContainer}>
      <Card
        title={i18n.t(i18n.l.general)}
        subtitle={i18n.t(i18n.l.choose_language)}
        rightComponent={<ChevronRight height={25} width={25} color={"$outline"} />}
        leftComponent={<Settings size={25} color={"#646464"} />}
        onPress={() => router.navigate("/(main)/stacks/profile/general")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    borderRadius: 100,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
