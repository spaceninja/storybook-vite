module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        backgrounds: false,
        controls: false,
      },
    },
    '@storybook/addon-a11y',
    'storybook-addon-themes',
  ],
  framework: '@storybook/html',
  core: {
    builder: 'storybook-builder-vite',
  },
};
