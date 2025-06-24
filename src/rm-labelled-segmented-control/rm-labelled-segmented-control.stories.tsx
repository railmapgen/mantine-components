import { RMLabelledSegmentedControl } from './rm-labelled-segmented-control';

export default {
    title: 'RMLabelledSegmentedControl',
    component: RMLabelledSegmentedControl,
};

export const Basic = () => {
    return (
        <RMLabelledSegmentedControl
            label="Foreground colour"
            data={[
                { label: 'Black', value: '#000' },
                { label: 'White', value: '#fff' },
            ]}
        />
    );
};
