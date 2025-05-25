import { Flex, MantineSize, Text } from '@mantine/core';
import classes from './rm-label.module.css';
import { HTMLProps } from 'react';
import clsx from 'clsx';

type RMLabelProps = Omit<HTMLProps<HTMLDivElement>, 'size' | 'span'> & {
    id: string;
    size?: MantineSize | string;
};

/**
 * `id` field is required for the `RMLabel` component, and it should be used as the `aria-labelledby` attribute of the control element, for accessibility reasons.
 */
export const RMLabel = ({ id, size, label, className, children, ...others }: RMLabelProps) => {
    return (
        <Flex direction="column">
            <Text id={id} component="div" size={size} className={clsx(classes.label, className)} {...others}>
                {label}
            </Text>
            {children}
        </Flex>
    );
};
