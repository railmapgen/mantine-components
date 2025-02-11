import classes from './rm-window.module.css';
import { Flex, FlexProps } from '@mantine/core';
import clsx from 'clsx';

export const RMWindow = ({ className, ...others }: FlexProps) => {
    return <Flex className={clsx('rm-window', classes.root, className)} {...others} />;
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
