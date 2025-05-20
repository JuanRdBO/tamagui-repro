import { memo, useMemo } from "react";
import { Text, View } from "tamagui";
import Animated, {
  withSpring,
  EntryExitAnimationFunction,
  withTiming,
  AnimatedProps,
} from "react-native-reanimated";
import { TextProps } from "tamagui";

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedView = Animated.createAnimatedComponent(View);

const MAX_TRANSLATE_Y = 10;
const INITIAL_SCALE = 0.2;
const SPRING_CONFIG = {
  damping: 18,
  stiffness: 180,
};

interface AnimatedText2Props {
  value: string;
  fontSize?: number;
  animatedNumberProps?: AnimatedProps<TextProps>;
}

export const AnimatedText2 = memo(({ value, fontSize = 16, animatedNumberProps }: AnimatedText2Props) => {
  const characters = useMemo(() => value.split(""), [value]);
  return (
    <View style={{ flexDirection: "row" }}>
      {characters.map((char, i) => (
        <AnimatedView key={`${char}-${i}`} entering={enteringAnimation(i)} exiting={exitingAnimation(i)}>
          <AnimatedText fontSize={fontSize} {...animatedNumberProps}>
            {char}
          </AnimatedText>
        </AnimatedView>
      ))}
    </View>
  );
});

const enteringAnimation =
  (charPos = 0): EntryExitAnimationFunction =>
  () => {
    "worklet";
    const isEven = charPos % 2 === 0;
    const animations = {
      transform: [{ translateY: withSpring(0, SPRING_CONFIG) }, { scale: withSpring(1, SPRING_CONFIG) }],
      opacity: withTiming(1, { duration: 100 }),
    };
    const initialValues = {
      opacity: 0,
      transform: [{ translateY: isEven ? -MAX_TRANSLATE_Y : MAX_TRANSLATE_Y }, { scale: INITIAL_SCALE }],
    };
    return {
      initialValues,
      animations,
    };
  };

const exitingAnimation =
  (charPos = 0): EntryExitAnimationFunction =>
  () => {
    "worklet";
    const isEven = charPos % 2 === 0;
    const animations = {
      transform: [
        { translateY: withSpring(isEven ? MAX_TRANSLATE_Y : -MAX_TRANSLATE_Y, SPRING_CONFIG) },
        { scale: withSpring(INITIAL_SCALE, SPRING_CONFIG) },
      ],
      opacity: withTiming(0, { duration: 150 }),
    };
    const initialValues = {
      opacity: 1,
      transform: [{ translateY: 0 }, { scale: 1 }],
    };
    return {
      initialValues,
      animations,
    };
  };
