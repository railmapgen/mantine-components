import { Box, TextInput as TextInputComponent } from '@mantine/core';
import { StoryObj } from '@storybook/react-vite';
import { RMMantineProvider } from '../rm-mantine-provider';
import { JSX } from 'react';

export default {
    title: 'RMMantineProvider/TextInput',
    component: TextInputComponent,
    tags: ['!autodocs'],
    decorators: [
        (Story: JSX.ElementType) => (
            <RMMantineProvider>
                <Box w={100}>
                    <Story />
                </Box>
            </RMMantineProvider>
        ),
    ],
};

type Story = StoryObj<typeof TextInputComponent>;

export const TextInput: Story = {
    args: {
        label: 'Text input with a very long label',
    },
};
