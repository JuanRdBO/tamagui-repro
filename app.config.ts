import { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Repro",
  slug: "so.decaf.wallet",
  version: "1.0.0",
  orientation: "portrait",
  icon: `./assets/images/decaf-icons/ios-icon-dark-development.png`,
  scheme: "repro",
  userInterfaceStyle: "automatic",
  experiments: {
    typedRoutes: true,
    tsconfigPaths: true,
    reactCompiler: true,
  },
  splash: {
    image: "./assets/images/transparent.png",
    resizeMode: "contain",
    backgroundColor: "#271244",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    config: {
      usesNonExemptEncryption: false,
    },
    supportsTablet: true,
    bundleIdentifier: "com.repro.app",
    buildNumber: "1.0.0",
  },
  android: {},
  runtimeVersion: "fingerprint",
  owner: "decaf",
  newArchEnabled: true,
  plugins: [
    /* Homebrew iOS plugins */
    ["./plugins/ios/withCustomNodeBinaryLocation", { nodeLocation: "node --print 'process.argv[0]'" }],
    ["./plugins/ios/withPodsDeploymentTarget"],
    /* Homebrew plugins end */

    [
      "expo-build-properties",
      {
        android: {
          compileSdkVersion: 35,
          targetSdkVersion: 34,
          minSdkVersion: 24,
          packagingOptions: {
            pickFirst: ["**/*libcrypto.so", "**/*libssl.so", "**/*libreactnative.so"],
          },
        },
        ios: {
          useFrameworks: "static",
          deploymentTarget: "16.6",
        },
      },
    ],
    [
      "react-native-edge-to-edge",
      {
        android: {
          parentTheme: "Material3",
          enforceNavigationBarContrast: false,
        },
      },
    ],
    "expo-router",
    "expo-asset",
    "expo-font",
    "expo-localization",
  ],
});
