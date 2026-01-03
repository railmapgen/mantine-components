import classes from './rm-window.module.css';
import { Flex, FlexProps } from '@mantine/core';
import clsx from 'clsx';

type RMWindowProps = {
    isAppClip?: boolean; // ignore safe-area-inset env vars
} & FlexProps;

export const RMWindow = ({ isAppClip, className, ...others }: RMWindowProps) => {
    return (
        <Flex
            className={clsx('rm-window', classes.root, isAppClip && 'rm-window--is-app-clip', className)}
            {...others}
        />
    );
};

type RMWindowHeaderProps = {
    isAppClipHeader?: boolean;
} & FlexProps;

export const RMWindowHeader = ({ isAppClipHeader, className, ...others }: RMWindowHeaderProps) => {
    return (
        <Flex
            className={clsx(
                'rm-window__header',
                isAppClipHeader && 'rm-window__app-clip-header',
                classes.header,
                className
            )}
            {...others}
        ></Flex>
    );
};
