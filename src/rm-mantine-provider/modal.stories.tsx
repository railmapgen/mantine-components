import { Modal as ModalComponent } from '@mantine/core';
import { StoryObj } from '@storybook/react';

export default {
    title: 'RMMantineProvider/Modal',
    component: ModalComponent,
    tags: ['!autodocs'],
};

type Story = StoryObj<typeof ModalComponent>;

export const Modal: Story = {
    args: {
        opened: true,
        title: 'Modal title',
        children: 'Modal content',
    },
};
