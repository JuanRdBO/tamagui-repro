const { withDangerousMod } = require("expo/config-plugins");
const fs = require("node:fs");
const path = require("node:path");
const { exec } = require("node:child_process");

function addiOSNodeLocationWithCommand(config, nodeCommand) {
  const filePathLocal = path.join(config.modRequest.platformProjectRoot, ".xcode.env.local");
  const filePath = path.join(config.modRequest.platformProjectRoot, ".xcode.env");

  exec(`${nodeCommand}`, (error, stdout, stderr) => {
    if (error) {
      return console.error(`Error executing "${nodeCommand}":`, error);
    }
    if (stderr) {
      return console.error(`Error output "${nodeCommand}":`, stderr);
    }

    // Clear the file before appending new text (optional)
    fs.writeFile(filePathLocal, "", (err) => {
      if (err) {
        return console.error("Failed to write to the file:", err);
      }
      console.log("node binary location", stdout.trim());
      // Append the path to the Node.js executable
      fs.writeFileSync(filePathLocal, `export NODE_BINARY=${stdout.trim()}\n`);
    });
    fs.writeFile(filePath, "", (err) => {
      if (err) {
        return console.error("Failed to write to the file:", err);
      }
      // Append the path to the Node.js executable
      fs.writeFileSync(filePath, `export NODE_BINARY=${stdout.trim()}\n`);
    });
  });

  return config;
}

module.exports = function withiOSSpecifyNodeLibCommand(config, command) {
  return withDangerousMod(config, [
    "ios",
    async (config) => addiOSNodeLocationWithCommand(config, command.nodeLocation),
  ]);
};
