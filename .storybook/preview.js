import { themes } from '@storybook/theming';
import breakpointViewports from '../src/compiled/js/breakpoints';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import './preview.scss';

const mltshpTheme = {
  brandTitle: 'MLTSHP Patterns',
  brandUrl: 'https://mltshp.com',
  brandImage: 'https://mltshp-cdn.com/static/images/logo-compact.svg',
};

export const parameters = {
  /**
   * Add light/dark mode to themes
   * @see https://storybook.js.org/addons/storybook-addon-themes
   */
  themes: [
    { name: 'Light', class: 't-light', color: 'white' },
    { name: 'Dark', class: 't-dark', color: 'black' },
  ],

  /**
   * Add our custom viewports
   * @see https://storybook.js.org/docs/react/essentials/viewport
   */
  viewport: {
    viewports: {
      ...breakpointViewports,
      ...INITIAL_VIEWPORTS,
    },
  },

  /**
   * Support dark mode
   * @see https://storybook.js.org/addons/storybook-dark-mode
   */
  darkMode: {
    dark: { ...themes.dark, ...mltshpTheme },
    light: { ...themes.normal, ...mltshpTheme },
    darkClass: 't-dark',
    lightClass: 't-light',
    stylePreview: true,
  },

  /**
   * Sorting stories
   * @see https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy#sorting-stories
   */
  options: {
    storySort: {
      order: ['Overview', 'Guidelines', 'Components'],
    },
  },
};
