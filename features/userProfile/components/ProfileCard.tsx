import { Link } from "expo-router";
import React from "react";
import { ProfilePhoto } from "./ProfilePhoto";
import { Text } from "@/components/Text";
import { View, XStack, YStack } from "tamagui";

export default function ProfileCard(): React.JSX.Element {
  return (
    <Link href="/(main)/tabs/profile" asChild>
      <View>
        <XStack alignItems="center" py="$2.5" gap="$2.5">
          <ProfilePhoto photoUrl={undefined} name={"John Smith"} photoSize={48} />
          <YStack justifyContent="center">
            <Text color="#090909">John Smith</Text>
            <Text color="#090909" fontWeight="500">
              @john
            </Text>
          </YStack>
        </XStack>
      </View>
    </Link>
  );
}
