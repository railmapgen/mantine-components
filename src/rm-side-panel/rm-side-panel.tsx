import classes from './rm-side-panel.module.css';
import clsx from 'clsx';
import { HTMLProps } from 'react';
import { CloseButton, Divider, Text } from '@mantine/core';

type RMSidePanelProps = HTMLProps<HTMLDivElement> & {
    opened: boolean;
    onClose?: () => void;
    title?: string;
    width?: number;
    overlay?: boolean;
    withCloseButton?: boolean;
};

export const RMSidePanel = ({
    opened,
    onClose,
    title,
    children,
    width,
    overlay,
    withCloseButton,
    className,
    style,
    ...others
}: RMSidePanelProps) => {
    return (
        <div
            className={clsx(classes.root, opened && classes.show, overlay && classes.overlay, className)}
            style={{ ['--side-panel-width' as any]: width ? `${width}px` : undefined, ...style }}
            {...others}
        >
            {withCloseButton && <CloseButton onClick={onClose} className={classes['close-btn']} />}
            {title && (
                <>
                    <Text className={classes.title}>{title}</Text>
                    <Divider />
                </>
            )}
            <div className={classes.wrapper}>{children}</div>
        </div>
    );
};
