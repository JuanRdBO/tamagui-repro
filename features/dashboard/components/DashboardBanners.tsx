import { Card } from "@/components/Card";
import React, { useCallback, useMemo } from "react";
import { FlatList, ImageSourcePropType, ColorValue, StyleSheet, Dimensions } from "react-native";
import * as i18n from "@/locales";
import { shuffle } from "lodash";
import { Image } from "expo-image";
import { Text } from "@/components/Text";
import { View } from "tamagui";

type BannerImage = {
  id: string;
  src: ImageSourcePropType;
  title: React.ReactNode;
  bgColor: ColorValue;
  onPress?: () => void;
};

export const DashboardBanners = (): React.JSX.Element => {
  const images: BannerImage[] = [
    {
      id: "1",
      src: require("@assets/images/banners/1.png"),
      bgColor: "#5b10a9",
      title: (
        <Text style={styles.bannerOneTextStyle} variant="bodyLarge" numberOfLines={2} minimumFontScale={0.85}>
          <Text style={styles.boldText}>{i18n.t(i18n.l.grow_your_money)}</Text>
          {"\n"}
          {i18n.t(i18n.l.invest_diversify_earn)}
        </Text>
      ),
      onPress: () => {},
    },
    {
      id: "2",
      src: require("@assets/images/banners/2.png"),
      bgColor: "#46237A",
      title: (
        <Text style={styles.bannerTwoTextStyle} variant="bodyLarge" numberOfLines={2} minimumFontScale={0.85}>
          <Text style={styles.whiteBoldText}>{i18n.t(i18n.l.withdraw_usdc)}</Text> {i18n.t(i18n.l.banner_to)}{" "}
          {"\n"}
          {i18n.t(i18n.l.banner_your)}{" "}
          <Text style={styles.whiteBoldText}>{i18n.t(i18n.l.mexican_bank)}.</Text>
        </Text>
      ),
      onPress: () => {},
    },
  ];

  const renderCard = useCallback(
    ({ item }: { item: BannerImage }) => (
      <Card
        key={item.id}
        style={styles.cardWithShadowStyle}
        innerContainerStyle={styles.removeDefaultStyle}
        onPress={item.onPress}
        leftComponent={
          <View style={[styles.cardStyle, styles.cardContainer]} backgroundColor={item.bgColor}>
            <View style={{ height: 75 }}>
              <Image source={item.src} style={{ flex: 1 }} contentFit="cover" />
            </View>
            <View style={styles.textContainer}>
              {item.title}
              <Text style={styles.knowMoreText}>{"Know more ->"}</Text>
            </View>
          </View>
        }
      />
    ),
    [],
  );

  const keyExtractor = useCallback((item: BannerImage) => item.id, []);

  const data = useMemo(() => {
    return shuffle(images);
  }, []);

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={Dimensions.get("window").width - 37}
      snapToAlignment="center"
      decelerationRate="fast"
      contentContainerStyle={styles.contentContainerStyle}
      renderItem={renderCard}
    />
  );
};

const styles = StyleSheet.create({
  whiteBoldText: {
    fontSize: 13,
    color: "white",
    fontFamily: "GeneralSansMedium",
    fontWeight: "600",
    lineHeight: 15.73,
  },
  boldText: {
    color: "white",
    fontFamily: "GeneralSansBold",
    fontSize: 13,
    lineHeight: 15.73,
  },
  removeDefaultStyle: {
    gap: 0,
    marginVertical: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  cardStyle: {
    height: 156,
    width: 170,
  },
  cardContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  bannerOneTextStyle: {
    fontFamily: "GeneralSansMedium",
    fontSize: 13,
    lineHeight: 15.73,
    color: "white",
  },
  bannerTwoTextStyle: {
    fontSize: 13,
    color: "white",
    fontFamily: "GeneralSansMedium",
    fontWeight: "300",
    lineHeight: 15.73,
  },
  knowMoreText: {
    fontSize: 11,
    color: "white",
    fontFamily: "GeneralSansMedium",
    fontWeight: "500",
    lineHeight: 13.71,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  cardWithShadowStyle: {
    width: 170,
  },
  contentContainerStyle: {
    gap: 10,
    paddingHorizontal: 20,
  },
});
