import '../src/index.css';
import type { Preview } from '@storybook/react';
import { RMMantineProvider } from '../src';
import ColourSchemeWrapper from './ColourSchemeWrapper';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'fullscreen',
    },
    decorators: [
        Story => (
            <ColourSchemeWrapper>
                <Story />
            </ColourSchemeWrapper>
        ),
        Story => (
            <RMMantineProvider>
                <Story />
            </RMMantineProvider>
        ),
    ],
    tags: ['autodocs'],
};

export default preview;
