import useFonts from "@/themes/useFonts";
import splashAnimation from "@assets/lottie/splash-animation.json";
import LottieView from "lottie-react-native";
import Animated, { Easing, FadeOut, LinearTransition } from "react-native-reanimated";
import { Dimensions, StyleSheet } from "react-native";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

type SplashScreenLoaderWrapperProps = {
  children: React.ReactNode;
};

export default function SplashScreenLoaderWrapper({
  children,
}: SplashScreenLoaderWrapperProps): React.ReactNode {
  const fontsLoaded = useFonts();

  return (
    <>
      {children}
      {!fontsLoaded && (
        <Animated.View exiting={FadeOut} style={styles.container}>
          <AnimatedLottieView
            source={splashAnimation}
            autoPlay={false}
            loop={false}
            layout={LinearTransition.duration(500).easing(Easing.inOut(Easing.ease))}
            style={styles.lottieContainer}
          />
        </Animated.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    inset: 0,
    backgroundColor: "#271244",
    justifyContent: "center",
    alignItems: "center",
  },
  lottieContainer: {
    width: Dimensions.get("window").width,
    aspectRatio: 1600 / 450, // 1600x450 is the size of the animation
  },
});
