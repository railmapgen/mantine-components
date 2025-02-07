import rmgRuntime from '@railmapgen/rmg-runtime';
import { PropsWithChildren, useEffect } from 'react';
import { createTheme, MantineProvider, useMantineColorScheme } from '@mantine/core';

const theme = createTheme({
    primaryColor: 'cyan',
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
