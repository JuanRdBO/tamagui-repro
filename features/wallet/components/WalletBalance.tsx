import { StyleSheet } from "react-native";
import { memo } from "react";
import { View } from "tamagui";
import { ChevronDown } from "@tamagui/lucide-icons";
import { Text } from "@/components/Text";
import { AnimatedText2 } from "./AnimatedText2";

export const WalletBalance = memo(() => {
  return (
    <View style={styles.container}>
      <View style={styles.amountButton}>
        <AnimatedText2
          fontSize={40}
          value={`$2,050 USD`}
          animatedNumberProps={{
            color: "#090909",
            fontFamily: "GeneralSansBold",
          }}
        />
        <ChevronDown size={24} color={"#090909"} />
      </View>

      <Text fontSize={13} style={styles.userAmountStyle} color="#646464">
        {` ~ 1,724 EUR`}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    rowGap: 4,
  },
  amountButton: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  userAmountStyle: {
    fontFamily: "GeneralSansMedium",
    fontSize: 14,
  },
});
