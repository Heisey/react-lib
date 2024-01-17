
import type { Preview } from "@storybook/react"
import { withThemeFromJSXProvider } from '@storybook/addon-themes'

import * as Providers from '../src/components/Providers'
import * as Core from '../src/core'


export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  }
};

export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    green: Core.config.themes.light,
    dark: Core.config.themes.dark,
  },
  defaultTheme: 'dark',
  Provider: Providers.Theme.Component,
  // GlobalStyles,
})];

// export default preview;
