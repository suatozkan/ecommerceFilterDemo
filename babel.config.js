module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          resources: "./app/resources",
          lib: "./app/lib",
          components: "./app/components",
          screens: "./app/screens",
          services: "./app/services",
          reduxstore: "./app/redux",
        },
      },
    ],
  ],
};
