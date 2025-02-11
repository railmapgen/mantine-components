import { RMThemeButton } from './rm-theme-button';
import { Group } from '@mantine/core';
import { MdClose } from 'react-icons/md';

export default {
    title: 'RMThemeButton',
    component: RMThemeButton,
};

export const Basic = () => {
    return (
        <Group>
            <RMThemeButton bg="red" fg="white" />
            <RMThemeButton bg="green" fg="black" title="Delete">
                <MdClose />
            </RMThemeButton>
        </Group>
    );
};
