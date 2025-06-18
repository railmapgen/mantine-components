import classes from './rm-theme-button.module.css';
import { ColorSwatch, ColorSwatchProps, PolymorphicComponentProps } from '@mantine/core';
import clsx from 'clsx';

type RMThemeButtonProps = {
    bg: string;
    fg: string;
} & Omit<PolymorphicComponentProps<'button', ColorSwatchProps>, 'color'>;

export const RMThemeButton = ({ bg, fg, className, style, children, ...others }: RMThemeButtonProps) => {
    return (
        <ColorSwatch
            component="button"
            color={bg}
            className={clsx(classes.root, className)}
            style={{ color: fg, ...style }}
            {...others}
        >
            {children ?? 'Aa'}
        </ColorSwatch>
    );
};
