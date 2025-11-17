import { Flex, MantineSize, Text } from '@mantine/core';
import classes from './rm-label.module.css';
import { HTMLProps } from 'react';
import clsx from 'clsx';

export type RMLabelProps = Omit<HTMLProps<HTMLDivElement>, 'size' | 'span'> & {
    id: string;
    size?: MantineSize | string;
    classNames?: {
        root?: string;
        label?: string;
    };
};

/**
 * `id` field is required for the `RMLabel` component, and it should be used as the `aria-labelledby` attribute of the control element, for accessibility reasons.
 */
export const RMLabel = ({ id, size = 'sm', label, classNames, className, children, ...others }: RMLabelProps) => {
    return (
        <Flex direction="column" className={classNames?.root}>
            <Text
                id={id}
                component="div"
                size={size}
                className={clsx(classes.label, classNames?.label, className)}
                {...others}
            >
                {label}
            </Text>
            {children}
        </Flex>
    );
};
