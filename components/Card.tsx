import React, { memo, ReactNode } from "react";
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Stack, XStack, YStack, Text, GetProps, TextProps, View } from "tamagui";

type StackProps = GetProps<typeof Stack>;

type Props = {
  onPress?: () => void;
  title?: string | ReactNode;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  subtitle?: string | ReactNode;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  subtitleTextStyle?: StyleProp<TextStyle>;
  subtitleProps?: TextProps;
  innerContainerStyle?: StyleProp<ViewStyle>;
  outerContainerStyle?: StyleProp<ViewStyle>;
} & StackProps;

export const Card = memo(
  ({
    onPress,
    title = null,
    leftComponent = null,
    rightComponent = null,
    subtitle = null,
    disabled,
    style,
    subtitleTextStyle,
    innerContainerStyle,
    outerContainerStyle,
    subtitleProps,
    ...cardContainerProps
  }: Props): React.JSX.Element => {
    return (
      <View
        disabled={disabled}
        onPress={disabled ? undefined : onPress}
        style={[outerContainerStyle, style]}
        width="100%"
        borderRadius={10}
        marginVertical={3}
        {...cardContainerProps}
      >
        <XStack style={[styles.innerContainer, innerContainerStyle]}>
          {leftComponent}

          <YStack style={styles.textContainer}>
            <TitleComponent title={title} />
            <SubtitleComponent subtitle={subtitle} subtitleTextStyle={subtitleTextStyle} {...subtitleProps} />
          </YStack>

          {rightComponent && <Stack>{rightComponent}</Stack>}
        </XStack>
      </View>
    );
  },
);

const SubtitleComponent = ({
  subtitle,
  subtitleTextStyle,
  ...subtitleProps
}: {
  subtitle?: string | ReactNode;
  subtitleTextStyle?: StyleProp<TextStyle>;
  subtitleProps?: TextProps;
}) => {
  if (!subtitle) return null;
  if (typeof subtitle !== "string") return subtitle;
  return (
    <Text color="#8d8d8d" style={subtitleTextStyle} {...subtitleProps}>
      {subtitle}
    </Text>
  );
};

const TitleComponent = ({
  title,
  titleTextStyle,
}: { title?: string | ReactNode; titleTextStyle?: StyleProp<TextStyle> }) => {
  if (!title) return null;
  if (typeof title !== "string") return title;
  return (
    <Text
      fontSize="$5"
      fontWeight="medium"
      numberOfLines={1}
      adjustsFontSizeToFit
      style={titleTextStyle}
      color="#090909"
    >
      {title}
    </Text>
  );
};

// @TODO: Replace with tamagui styles when we migrate fully
const styles = StyleSheet.create({
  innerContainer: {
    alignItems: "center",
    gap: 10,
    marginVertical: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
  },
  textContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
});
