module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
};
