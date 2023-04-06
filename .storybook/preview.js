import * as NextImage from 'next/image';
import App from '../pages/_app.mdx';
import { pageProps } from './constants';
import '../styles/styles.scss';
import '../styles/tokens.scss';
import { ThemeProvider } from '../providers/themeprovider';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      router: {
        basePath: '',
      },
    },
  },
};

export const decorators = [
  Story => (
    <ThemeProvider>
      <App Component={Story} pageProps={pageProps} />
    </ThemeProvider>
  ),
];

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});

export default preview;
