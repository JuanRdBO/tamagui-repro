import { Card } from "@/components/Card";
import { ReactElement, useCallback } from "react";
import { FlatList } from "react-native";
import { useGetAllLanguages } from "@/locales/hooks/useGetAllLanguages";
import * as i18n from "@/locales";
import { Image } from "expo-image";

export function LanguagesList({ searchQuery }: { searchQuery: string }): React.ReactNode {
  const data = useGetAllLanguages();

  const onPress = (item: i18n.LanguageItem) => {
    i18n.updateLanguageLocale(item.code);
  };

  const renderItem = useCallback(
    ({ item }: { item: i18n.LanguageItem }) => <LanguageItem item={item} onPress={onPress} />,
    [onPress],
  );

  const keyExtractor = useCallback((item: i18n.LanguageItem) => item.code, []);

  console.log("data", JSON.stringify(data, null, 2));
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
}

const LanguageItem = ({
  item,
  onPress,
}: {
  item: i18n.LanguageItem;
  onPress: (item: i18n.LanguageItem) => void;
}): ReactElement | null => {
  return (
    <Card
      onPress={() => onPress(item)}
      title={item.metadata.nativeName}
      leftComponent={<Image source={{ uri: item.metadata.flag }} style={{ width: 32, height: 32 }} />}
    />
  );
};
