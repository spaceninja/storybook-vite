const StyleDictionary = require('style-dictionary');

const styleDictionaryConfig = {
  log: 'warn',
  source: ['src/tokens/**/*.+(js|json)'],
  platforms: {
    web: {
      transformGroup: 'custom/transform-group/minimal',
      buildPath: 'src/compiled/css/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
        },
      ],
    },
    scss: {
      transformGroup: 'custom/transform-group/minimal',
      buildPath: 'src/compiled/scss/',
      files: [
        {
          destination: '_tokens.scss',
          format: 'scss/variables',
        },
      ],
    },
    js: {
      transformGroup: 'custom/transform-group/minimal',
      buildPath: 'src/compiled/js/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json',
        },
        {
          destination: 'breakpoints.js',
          format: 'custom/format/storybook-viewports',
          filter: { attributes: { category: 'size', type: 'breakpoint' } },
        },
      ],
    },
  },
};

/**
 * Custom Transform Group: Minimal
 * This is a modified version of the CSS transform group without the time,
 * size, or icon transformations we don't make use of.
 */
StyleDictionary.registerTransformGroup({
  name: 'custom/transform-group/minimal',
  transforms: ['attribute/cti', 'name/cti/kebab', 'color/css'],
});

/**
 * Custom Format: Storybook Viewports
 * This converts our breakpoint tokens to an array of viewport objects
 * to pass to the Storybook Viewport addon.
 *
 * @see https://storybook.js.org/docs/react/essentials/viewport
 */
StyleDictionary.registerFormat({
  name: 'custom/format/storybook-viewports',
  formatter(dictionary) {
    const props = dictionary.allProperties.map((prop) => {
      const { attributes, value } = prop;
      const name = attributes.item;
      return {
        name: name,
        styles: {
          width: value,
          height: '100%',
        },
        type: 'other',
      };
    });
    console.log(props);
    const string = `export default ${JSON.stringify(props, null, '  ')}`;
    console.log(string);
    return string;
  },
});

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const StyleDictionaryExtended = StyleDictionary.extend(styleDictionaryConfig);

// BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();
