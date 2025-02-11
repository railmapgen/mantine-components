import classes from './rm-theme-button.module.css';
import { ColorSwatch, ColorSwatchProps } from '@mantine/core';
import clsx from 'clsx';

type RMThemeButtonProps = {
    bg: string;
    fg: string;
} & Omit<ColorSwatchProps, 'color'>;

export const RMThemeButton = ({ bg, fg, className, children, ...others }: RMThemeButtonProps) => {
    return (
        <ColorSwatch
            component="button"
            color={bg}
            className={clsx(classes.root, className)}
            style={{ color: fg }}
            {...others}
        >
            {children ?? 'Aa'}
        </ColorSwatch>
    );
};
