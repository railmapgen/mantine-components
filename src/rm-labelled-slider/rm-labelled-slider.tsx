import classes from './rm-labelled-slider.module.css';
import { RMLabel } from '../rm-label';
import { ActionIcon, ActionIconProps, Group, MantineSize, Slider, SliderProps } from '@mantine/core';
import { ReactNode, useId, useRef } from 'react';
import clsx from 'clsx';

type RMLabelledSliderProps = {
    fieldLabel: string;
    size?: MantineSize | string;
    withExternalControls?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    leftIconLabel?: string;
    rightIconLabel?: string;
    buttonControlProps?: ActionIconProps;
} & Omit<SliderProps, 'size'>;

export const RMLabelledSlider = ({
    fieldLabel,
    size,
    withExternalControls,
    leftIcon,
    rightIcon,
    leftIconLabel,
    rightIconLabel,
    buttonControlProps,
    className,
    style,
    ...others
}: RMLabelledSliderProps) => {
    const labelId = useId();
    const sliderRef = useRef<HTMLDivElement>(null);

    const handleButtonClick = (key: string) => {
        const keyboardEvent = new KeyboardEvent('keydown', { key });
        sliderRef.current?.dispatchEvent(keyboardEvent);
    };

    return (
        <RMLabel id={labelId} label={fieldLabel} size={size}>
            <Group gap="xs">
                {withExternalControls && (
                    <ActionIcon
                        variant="subtle"
                        size={size}
                        aria-label={leftIconLabel}
                        onClick={() => handleButtonClick('ArrowLeft')}
                        {...buttonControlProps}
                    >
                        {leftIcon}
                    </ActionIcon>
                )}
                <Slider
                    ref={sliderRef}
                    size={size}
                    thumbLabel={fieldLabel}
                    className={clsx(classes.root, className)}
                    style={{ '--rm-slider-height': `var(--rm-slider-height-${size})`, ...style }}
                    {...others}
                />
                {withExternalControls && (
                    <ActionIcon
                        variant="subtle"
                        size={size}
                        aria-label={rightIconLabel}
                        onClick={() => handleButtonClick('ArrowRight')}
                        {...buttonControlProps}
                    >
                        {rightIcon}
                    </ActionIcon>
                )}
            </Group>
        </RMLabel>
    );
};
