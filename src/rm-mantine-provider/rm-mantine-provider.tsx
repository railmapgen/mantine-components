import classes from './mantine-override.module.css';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { PropsWithChildren, useEffect } from 'react';
import { createTheme, MantineProvider, Modal, useMantineColorScheme } from '@mantine/core';

const theme = createTheme({
    primaryColor: 'cyan',
    components: {
        Modal: Modal.extend({
            classNames: {
                title: classes['modal-title'],
            },
        }),
    },
});

const colourMode = rmgRuntime.getColourMode();
const MantineProviderInner = ({ children }: PropsWithChildren) => {
    const { setColorScheme } = useMantineColorScheme();

    // FIXME: We probably don't need this when we're fully migrated to Mantine UI.
    useEffect(() => {
        rmgRuntime.onColourModeChange(mode => {
            setColorScheme(mode === 'system' ? 'auto' : mode);
        });
    }, [setColorScheme]);

    return children;
};

export const RMMantineProvider = ({ children }: PropsWithChildren) => {
    return (
        <MantineProvider theme={theme} defaultColorScheme={colourMode === 'system' ? 'auto' : colourMode}>
            <MantineProviderInner>{children}</MantineProviderInner>
        </MantineProvider>
    );
};
