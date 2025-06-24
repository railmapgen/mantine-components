import { RMLabelledSlider } from './rm-labelled-slider';
import { MdOutlineZoomIn, MdOutlineZoomOut } from 'react-icons/md';
import { Stack } from '@mantine/core';

export default {
    title: 'RMLabelledSlider',
    component: RMLabelledSlider,
};

export const Basic = () => {
    return (
        <Stack>
            <RMLabelledSlider
                fieldLabel="Canvas scale with button controls"
                label={label => `${label}x`}
                min={0.1}
                max={2}
                step={0.1}
            />
            <RMLabelledSlider
                fieldLabel="Canvas scale with button controls"
                label={label => `${label}x`}
                min={0.1}
                max={2}
                step={0.1}
                withExternalControls
                leftIcon={<MdOutlineZoomOut />}
                rightIcon={<MdOutlineZoomIn />}
                leftIconLabel="Zoom out"
                rightIconLabel="Zoom in"
            />
        </Stack>
    );
};
