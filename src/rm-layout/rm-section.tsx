import classes from './rm-section.module.css';
import { Flex, FlexProps } from '@mantine/core';
import clsx from 'clsx';

export const RMSection = ({ className, ...others }: FlexProps) => {
    return <Flex className={clsx('rm-section', classes.root, className)} {...others} />;
};

export const RMSectionHeader = ({ className, ...others }: FlexProps) => {
    return <Flex className={clsx('rm-section__header', classes.header, className)} {...others} />;
};

export const RMSectionBody = ({ className, ...others }: FlexProps) => {
    return <Flex className={clsx('rm-section__body', classes.body, className)} {...others} />;
};
