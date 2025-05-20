import { StyleSheet } from "react-native";
import { ScrollView } from "tamagui";
import { UserInfoHeader } from "./components/UserInfoHeader";
import { ProfileScreenCards } from "./components/ProfileScreenCards";

export default function ProfileScreen(): React.JSX.Element {
  const InnerContents = () => {
    return (
      <>
        <UserInfoHeader />
        <ProfileScreenCards />
      </>
    );
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.container}
    >
      <InnerContents />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, gap: 30 },
  logoutButtonLabel: { fontFamily: "GeneralSansMedium", fontSize: 16 },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
    width: "90%",
    alignSelf: "center",
  },
  cardContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileBadge: { position: "absolute", top: -4, right: -4 },
  loadingText: { fontSize: 20 },
});
