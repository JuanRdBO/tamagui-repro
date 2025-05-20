const { mergeConfig } = require("metro-config");
const { getDefaultConfig } = require("expo/metro-config");

// This replaces `const config = getDefaultConfig(__dirname);`
const config = getDefaultConfig(__dirname);

// Configure metro to support linked packages (added via yarn link).
// yarn link works by creating a symlink in node_modules. Metro requires the parameters below in order to
// handle this.
const myConfig = {
  resolver: {
    unstable_enableSymlinks: true,
  },
};

module.exports = mergeConfig(config, myConfig);
