import * as i18n from "@/locales";
import {
  NativeBottomTabNavigationEventMap,
  NativeBottomTabNavigationOptions,
  createNativeBottomTabNavigator,
} from "@bottom-tabs/react-navigation";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";
import React from "react";
import { Platform } from "react-native";

const BottomTabNavigator = createNativeBottomTabNavigator().Navigator;
const Tabs = withLayoutContext<
  NativeBottomTabNavigationOptions,
  typeof BottomTabNavigator,
  TabNavigationState<ParamListBase>,
  NativeBottomTabNavigationEventMap
>(BottomTabNavigator);

export default function Navigator(): React.JSX.Element {
  return (
    <Tabs
      labeled
      translucent
      hapticFeedbackEnabled
      disablePageAnimations={Platform.select({ android: true, ios: false })}
      rippleColor={"transparent"}
      tabBarActiveTintColor={"#271244"}
      tabBarInactiveTintColor={"#4A4A4A"}
      tabLabelStyle={{
        fontFamily: "GeneralSansMedium",
        fontWeight: "500",
      }}
      tabBarStyle={{
        backgroundColor: Platform.select({
          android: "#FFFFFF",
          ios: undefined,
        }),
      }}
      activeIndicatorColor={Platform.select({
        ios: "#D1BCFF",
        android: "#E7E7E7",
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: i18n.t(i18n.l.home_tab),
          tabBarIcon: () => require("@assets/images/tabbar-icons/home.png"),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: i18n.t(i18n.l.profile_tab),
          tabBarIcon: () => require("@assets/images/tabbar-icons/user.png"),
        }}
      />
    </Tabs>
  );
}
