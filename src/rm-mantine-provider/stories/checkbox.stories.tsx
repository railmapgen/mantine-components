import { Checkbox as CheckboxComponent } from '@mantine/core';
import { StoryObj } from '@storybook/react';

export default {
    title: 'RMMantineProvider/Checkbox',
    component: CheckboxComponent,
    tags: ['!autodocs'],
};

type Story = StoryObj<typeof CheckboxComponent>;

export const Checkbox: Story = {
    args: {
        label: 'Checkbox label',
    },
    argTypes: {
        labelPosition: {
            options: ['left', 'right', undefined],
            control: { type: 'radio' },
        },
    },
};
