import { Dashboard } from "@/features/dashboard";
import { View } from "tamagui";
import { StyleSheet } from "react-native";

export default function HomePage(): React.JSX.Element {
  return (
    <View style={styles.wrapper}>
      <Dashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 100,
    height: "120%",
  },
  backgroundWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "column",
    zIndex: -1000,
  },
});
