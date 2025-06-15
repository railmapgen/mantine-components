import classes from './rm-side-panel.module.css';
import clsx from 'clsx';
import { HTMLProps } from 'react';
import { useClickOutside } from '@mantine/hooks';

type RMSidePanelProps = HTMLProps<HTMLDivElement> & {
    opened: boolean;
    onClose: () => void;
    width?: number;
    pinned?: boolean;
    overlay?: boolean;
};

export const RMSidePanel = ({
    opened,
    onClose,
    children,
    width,
    pinned,
    overlay,
    className,
    style,
    ...others
}: RMSidePanelProps) => {
    const ref = useClickOutside(() => {
        if (!pinned) {
            onClose();
        }
    });

    return (
        <div
            ref={ref}
            className={clsx(classes.root, opened && classes.show, overlay && classes.overlay, className)}
            style={{ ['--side-panel-width' as any]: width ? `${width}px` : undefined, ...style }}
            {...others}
        >
            <div className={classes.wrapper}>{children}</div>
        </div>
    );
};
