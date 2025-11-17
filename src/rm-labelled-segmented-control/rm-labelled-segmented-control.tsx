import { SegmentedControl, SegmentedControlProps } from '@mantine/core';
import { useId } from 'react';
import { RMLabel, RMLabelProps } from '../rm-label';

type RMLabelledSegmentedControlProps = {
    label: string;
    classNames?: RMLabelProps['classNames'] & { control?: string };
} & SegmentedControlProps;

export const RMLabelledSegmentedControl = ({
    label,
    size,
    classNames = {},
    ...others
}: RMLabelledSegmentedControlProps) => {
    const { control: controlClassName, ...labelClassNames } = classNames;
    const labelId = useId();

    return (
        <RMLabel id={labelId} size={size} label={label} classNames={labelClassNames}>
            <SegmentedControl size={size} aria-labelledby={labelId} className={controlClassName} {...others} />
        </RMLabel>
    );
};
