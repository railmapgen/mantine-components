import { PropsWithChildren, useEffect } from 'react';
import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { useMantineColorScheme } from '@mantine/core';

const channel = addons.getChannel();

export default function ColourSchemeWrapper({ children }: PropsWithChildren) {
    const { setColorScheme } = useMantineColorScheme();

    const handleDarkMode = (isDarkMode: boolean) => {
        const scheme = isDarkMode ? 'dark' : 'light';
        rmgRuntime.setColourMode(scheme);
        setColorScheme(scheme);
    };

    useEffect(() => {
        channel.on(DARK_MODE_EVENT_NAME, handleDarkMode);
        return () => channel.off(DARK_MODE_EVENT_NAME, handleDarkMode);
    }, [channel]);

    return <>{children}</>;
}
