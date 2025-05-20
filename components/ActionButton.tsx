import React, { memo } from "react";

import { Text } from "@/components/Text";
import { View } from "tamagui";

type ActionButtonProps = {
  children: string;
  onPress?: () => void;
  variant?: "primary" | "secondary";
  icon?: React.ReactElement;
};

export const ActionButton = memo(({ children, onPress, variant = "secondary", icon }: ActionButtonProps) => {
  return (
    <View
      onPress={onPress}
      py="$3"
      px="$3.5"
      borderRadius="$10"
      flexDirection="row"
      alignItems="center"
      gap="$1.5"
      bg={variant === "primary" ? "#5b10a9" : "#e0e0e0"}
    >
      {!!icon &&
        React.cloneElement(icon, {
          color: variant === "primary" ? "#ffffff" : "#090909",
        })}
      <Text variant="labelSmMedium" color={variant === "primary" ? "#ffffff" : "#090909"}>
        {children}
      </Text>
    </View>
  );
});
