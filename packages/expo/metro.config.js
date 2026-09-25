const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, "../..");
const srcRoot = path.resolve(projectRoot, "src");

/** @type {import("expo/metro-config").MetroConfig} */
const config = getDefaultConfig(projectRoot);

config.watchFolders = [monorepoRoot];
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(monorepoRoot, "node_modules"),
];

const resolvePackage = name =>
  path.dirname(require.resolve(`${name}/package.json`, { paths: [projectRoot] }));

config.resolver.extraNodeModules = {
  react: resolvePackage("react"),
  "react-dom": resolvePackage("react-dom"),
  "react-native": resolvePackage("react-native"),
  "react-native-svg": resolvePackage("react-native-svg"),
  "react-native-reanimated": resolvePackage("react-native-reanimated"),
  "react-native-worklets": resolvePackage("react-native-worklets"),
};

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName.startsWith("@/")) {
    return context.resolveRequest(context, path.join(srcRoot, moduleName.slice(2)), platform);
  }
  return context.resolveRequest(context, moduleName, platform);
};

config.transformer = {
  ...config.transformer,
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: true,
    },
  }),
};

module.exports = config;
