import classes from './mantine-override.module.css';
import rmgRuntime from '@railmapgen/rmg-runtime';
import { PropsWithChildren, useEffect } from 'react';
import {
    Checkbox,
    createTheme,
    InputWrapper,
    MantineProvider,
    Modal,
    Slider,
    Switch,
    useMantineColorScheme,
} from '@mantine/core';

const theme = createTheme({
    primaryColor: 'cyan',
    components: {
        Checkbox: Checkbox.extend({
            defaultProps: {
                labelPosition: 'left',
            },
        }),
        InputWrapper: InputWrapper.extend({
            classNames: {
                label: classes['input-wrapper__label'],
            },
        }),
        Modal: Modal.extend({
            classNames: {
                title: classes['modal__title'],
            },
        }),
        Slider: Slider.extend({
            defaultProps: {
                size: 'sm',
            },
        }),
        Switch: Switch.extend({
            defaultProps: {
                labelPosition: 'left',
                withThumbIndicator: false,
            },
            classNames: {
                labelWrapper: classes['switch__label-wrapper'],
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
