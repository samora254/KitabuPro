module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', { jsxRuntime: 'automatic' }]
    ],
    plugins: [
      'expo-router/babel',
      'react-native-reanimated/plugin',
      '@babel/plugin-proposal-export-namespace-from'
    ],
  };
};