const { withDangerousMod } = require("expo/config-plugins");
const fs = require("node:fs");
const path = require("node:path");

function addPodsDeploymentTarget(config) {
  const podfilePath = path.join(config.modRequest.platformProjectRoot, "Podfile");

  const deploymentTargetBlock = `
    # This ensures all the pods adhere to the same deployment target.
    installer.pods_project.targets.each do |target|
      target.build_configurations.each do |config|
        config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '16.6'
      end
    end\n`;

  // Read the current Podfile content
  let podfileContent = fs.readFileSync(podfilePath, "utf8");

  if (podfileContent.includes("post_install do |installer|")) {
    // If post_install exists, add our block inside it
    const postInstallPosition = podfileContent.indexOf("post_install do |installer|");
    const endPosition = podfileContent.indexOf("end", postInstallPosition);

    // Insert our block just before the end of post_install
    podfileContent =
      podfileContent.slice(0, endPosition) + deploymentTargetBlock + podfileContent.slice(endPosition);
  } else {
    // If no post_install exists, create it with our block
    const postInstallBlock = `
post_install do |installer|${deploymentTargetBlock}
end\n`;
    podfileContent += "\n" + postInstallBlock;
  }

  // Write the modified content back to the Podfile
  fs.writeFileSync(podfilePath, podfileContent);

  return config;
}

module.exports = function withPodsDeploymentTarget(config) {
  return withDangerousMod(config, ["ios", async (config) => addPodsDeploymentTarget(config)]);
};
