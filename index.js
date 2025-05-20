// Crypto dependencies
import "react-native-get-random-values";
import { install } from "react-native-quick-crypto";
install();

// To make inactive screens be suspended from re-rendering
import { enableFreeze } from "react-native-screens";
enableFreeze(true);

import "expo-router/entry";
