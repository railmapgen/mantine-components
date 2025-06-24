import { Slider as SliderComponent } from '@mantine/core';
import { StoryObj } from '@storybook/react';

export default {
    title: 'RMMantineProvider/Slider',
    component: SliderComponent,
    tags: ['!autodocs'],
};

type Story = StoryObj<typeof SliderComponent>;

export const Slider: Story = {
    args: {
        min: 0,
        max: 100,
        step: 1,
    },
};
