import classes from './rm-labelled-segmented-control.module.css';
import { Flex, SegmentedControl, SegmentedControlProps, Text } from '@mantine/core';

type RMLabelledSegmentedControlProps = {
    label: string;
} & SegmentedControlProps;

export const RMLabelledSegmentedControl = ({ label, size, ...others }: RMLabelledSegmentedControlProps) => {
    return (
        <Flex direction="column">
            <Text size={size} className={classes.label}>
                {label}
            </Text>
            <SegmentedControl size={size} {...others} />
        </Flex>
    );
};
