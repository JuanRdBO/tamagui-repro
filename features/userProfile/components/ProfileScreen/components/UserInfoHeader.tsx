import { StyleSheet } from "react-native";
import { ProfilePhoto } from "../../ProfilePhoto";
import { Text } from "@/components/Text";
import { View } from "tamagui";

export function UserInfoHeader(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View>
        <ProfilePhoto photoUrl={undefined} name={"John Smith"} />
      </View>
      <Text style={styles.username} color="#646464">
        {`@john`}
      </Text>

      <Text variant="bodyLarge" color="#8d8d8d" numberOfLines={1}>
        {`john@example.com`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },
  username: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: "GeneralSansSemibold",
  },
});
