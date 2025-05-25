import classes from './rm-labelled-segmented-control.module.css';
import { Flex, SegmentedControl, SegmentedControlProps, Text } from '@mantine/core';
import { useId } from 'react';

type RMLabelledSegmentedControlProps = {
    label: string;
} & SegmentedControlProps;

export const RMLabelledSegmentedControl = ({ label, size, ...others }: RMLabelledSegmentedControlProps) => {
    const labelId = useId();

    return (
        <Flex direction="column">
            <Text id={labelId} component="div" size={size} className={classes.label}>
                {label}
            </Text>
            <SegmentedControl size={size} aria-labelledby={labelId} {...others} />
        </Flex>
    );
};
