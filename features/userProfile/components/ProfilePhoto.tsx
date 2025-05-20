import { Image } from "expo-image";
import React from "react";
import { View } from "tamagui";
import { Text } from "@/components/Text";

export function ProfilePhoto({
  photoUrl,
  name,
  photoSize = 100,
}: {
  photoUrl?: string;
  name: string;
  photoSize?: number;
}): React.JSX.Element {
  const initials = "JS";
  return (
    <View
      width={photoSize}
      height={photoSize}
      justifyContent="center"
      alignItems="center"
      borderRadius={photoSize / 2}
      overflow="hidden"
      backgroundColor="#e0e0e0"
    >
      {photoUrl ? (
        <Image
          style={{ width: photoSize, height: photoSize, borderRadius: photoSize / 2 }}
          source={{ uri: photoUrl }}
        />
      ) : (
        <Text alignSelf="center" fontWeight="600" fontSize={photoSize / 2.5}>
          {initials}
        </Text>
      )}
    </View>
  );
}
