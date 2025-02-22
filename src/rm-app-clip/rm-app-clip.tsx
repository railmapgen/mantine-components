import classes from './rm-app-clip.module.css';
import { Modal, ModalProps } from '@mantine/core';
import clsx from 'clsx';

type RMAppClipProps = {} & ModalProps;

export const RMAppClip = ({ classNames, children, ...others }: RMAppClipProps) => {
    return (
        <Modal.Root
            keepMounted
            classNames={{ ...classNames, content: clsx(classes.content, classNames?.content) }}
            {...others}
        >
            <Modal.Overlay />
            <Modal.Content>{children}</Modal.Content>
        </Modal.Root>
    );
};
