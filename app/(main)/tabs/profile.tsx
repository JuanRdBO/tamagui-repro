import { ProfileScreen } from "@/features/userProfile";
import { View } from "tamagui";

export default function Profile(): React.JSX.Element {
  return (
    <View flex={1} paddingTop={100} backgroundColor="#f9f9f9">
      <ProfileScreen />
    </View>
  );
}
