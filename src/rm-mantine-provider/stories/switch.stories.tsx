import { Box, Switch as SwitchComponent } from '@mantine/core';
import { StoryObj } from '@storybook/react';
import { JSX } from 'react';
import { RMMantineProvider } from '../rm-mantine-provider';

export default {
    title: 'RMMantineProvider/Switch',
    component: SwitchComponent,
    tags: ['!autodocs'],
    decorators: [
        (Story: JSX.ElementType) => (
            <RMMantineProvider>
                <Box w={400} style={{ border: '1px solid cyan' }}>
                    <Story />
                </Box>
            </RMMantineProvider>
        ),
    ],
};

type Story = StoryObj<typeof SwitchComponent>;

export const Switch: Story = {
    args: {
        label: 'Switch label',
        withThumbIndicator: undefined,
    },
    argTypes: {
        labelPosition: {
            options: ['left', 'right', undefined],
            control: { type: 'radio' },
        },
        withThumbIndicator: {
            options: [true, false, undefined],
            control: { type: 'radio' },
        },
    },
};
