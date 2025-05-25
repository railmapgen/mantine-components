import { SegmentedControl, SegmentedControlProps } from '@mantine/core';
import { useId } from 'react';
import { RMLabel } from '../rm-label';

type RMLabelledSegmentedControlProps = {
    label: string;
} & SegmentedControlProps;

export const RMLabelledSegmentedControl = ({ label, size, ...others }: RMLabelledSegmentedControlProps) => {
    const labelId = useId();

    return (
        <RMLabel id={labelId} size={size} label={label}>
            <SegmentedControl size={size} aria-labelledby={labelId} {...others} />
        </RMLabel>
    );
};
