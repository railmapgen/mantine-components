import { Switch as SwitchComponent } from '@mantine/core';
import { StoryObj } from '@storybook/react';

export default {
    title: 'RMMantineProvider/Switch',
    component: SwitchComponent,
    tags: ['!autodocs'],
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
