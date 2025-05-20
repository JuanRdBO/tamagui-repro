import { SplashScreenLoaderWrapper } from "@/features/splashScreenLoader";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Slot } from "expo-router";
import React, { memo } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useTriggerRerenderOnLanguageChange } from "@/locales/hooks/useTriggerRerenderOnLanguageChange";
import { TamaguiProvider } from "@tamagui/core";
import config from "@/themes/tamagui.config";
import { PaperProvider } from "react-native-paper";
import { PortalProvider } from "tamagui";

const RootLayout = memo(() => {
  return (
    <KeyboardProvider statusBarTranslucent navigationBarTranslucent>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PaperProvider>
          <RootComponentsNavigator />
        </PaperProvider>
      </GestureHandlerRootView>
    </KeyboardProvider>
  );
});

const RootComponentsNavigator = memo((): React.ReactNode => {
  const version = useTriggerRerenderOnLanguageChange();

  return (
    <TamaguiProvider config={config} defaultTheme={"light"}>
      <PortalProvider shouldAddRootHost>
        <BottomSheetModalProvider>
          <SplashScreenLoaderWrapper>
            <SafeAreaProvider>
              <Slot key={version} />
            </SafeAreaProvider>
          </SplashScreenLoaderWrapper>
        </BottomSheetModalProvider>
      </PortalProvider>
    </TamaguiProvider>
  );
});

export default RootLayout;
