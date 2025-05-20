module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [
            ".ios.js",
            ".android.js",
            ".ios.jsx",
            ".android.jsx",
            ".js",
            ".jsx",
            ".json",
            ".ts",
            ".tsx",
          ],
          root: ["./"],
          alias: {
            assert: "assert",
            events: "events",
            base64: "react-native-quick-base64",
            "node:crypto": "react-native-quick-crypto",
            crypto: "react-native-quick-crypto",
            buffer: "@craftzdog/react-native-buffer",
            stream: "stream-browserify",
            https: "https-browserify",
            http: "stream-http",
            pbkdf2: "react-native-pbkdf2",
          },
        },
      ],
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./themes/tamagui.config.ts",
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === "development",
        },
      ],
      /**
       * A Babel plugin for using React Native Reanimated.
       * @see https://docs.swmansion.com/react-native-reanimated/docs/installation/
       */
      require.resolve("react-native-reanimated/plugin"),
      "react-native-paper/babel",
    ],
  };
};
