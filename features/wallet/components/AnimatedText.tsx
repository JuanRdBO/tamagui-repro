import { MotiView } from "moti";
import { useState } from "react";
import { StyleProp, TextProps, TextStyle, View, Text } from "react-native";

const numbersToNine = [...Array(10).keys()];

type TickerListProps = {
  number: number;
  fontSize: number;
  index: number;
  staggerDuration: number;
  style?: StyleProp<TextStyle>;
};

type TickerProps = {
  value: number | string;
  fontSize?: number;
  staggerDuration?: number;
  style?: StyleProp<TextStyle>;
};

const Tick = ({ children, fontSize, style, ...rest }: TextProps & { fontSize: number }) => (
  <Text
    {...rest}
    style={[
      style,
      {
        fontSize: fontSize,
        lineHeight: fontSize * 1.1,
        height: fontSize,
        fontVariant: ["tabular-nums"],
      },
    ]}
  >
    {children}
  </Text>
);

const TickerList = ({ number, fontSize, index, staggerDuration, style }: TickerListProps) => (
  <View
    style={{
      height: fontSize,
      overflow: "hidden",
    }}
  >
    <MotiView
      animate={{
        translateY: -fontSize * number,
      }}
      transition={{
        delay: index * staggerDuration,
        damping: 80,
        stiffness: 200,
      }}
    >
      {numbersToNine.map((num, index) => {
        return (
          <Tick key={`number-${num}-${index}`} fontSize={fontSize} style={style}>
            {num}
          </Tick>
        );
      })}
    </MotiView>
  </View>
);

export function AnimatedText({ value = 0, fontSize = 50, staggerDuration = 50, style }: TickerProps) {
  const splitValue = String(value).split("");
  const [newFontSize, setNewFontSize] = useState(fontSize);
  return (
    <View>
      <Tick
        fontSize={fontSize}
        numberOfLines={1}
        adjustsFontSizeToFit
        style={[
          style,
          {
            position: "absolute",
            left: 1000000,
            top: 1000000,
          },
        ]}
        onTextLayout={(e) => {
          // Use height directly instead of ascender/descender calculation
          const newFontSize = Math.floor(e.nativeEvent.lines[0].height);
          if (newFontSize === fontSize) return;
          setNewFontSize(newFontSize);
        }}
      >
        {value}
      </Tick>
      <View style={{ flexDirection: "row", flexWrap: "nowrap" }}>
        {splitValue.map((number, index) => {
          if (!Number.isNaN(Number.parseInt(number))) {
            return (
              <TickerList
                fontSize={newFontSize}
                number={Number.parseInt(number)}
                index={index}
                staggerDuration={staggerDuration}
                style={style}
                key={index}
              />
            );
          }
          return (
            <Tick key={index} fontSize={newFontSize} style={style}>
              {number}
            </Tick>
          );
        })}
      </View>
    </View>
  );
}
