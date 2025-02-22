import { RMAppClip } from './rm-app-clip';
import { Box, Button, Group, Stack, Text } from '@mantine/core';
import { useState } from 'react';

export default {
    title: 'RMAppClip',
    component: RMAppClip,
};

export const Basic = () => {
    const [opened, setOpened] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);

    return (
        <Box p="sm">
            <Group>
                <Button
                    onClick={() => {
                        setOpened(true);
                        setFullscreen(false);
                    }}
                >
                    Default
                </Button>
                <Button
                    onClick={() => {
                        setOpened(true);
                        setFullscreen(true);
                    }}
                >
                    Fullscreen
                </Button>
            </Group>

            <RMAppClip opened={opened} onClose={() => setOpened(false)} fullScreen={fullscreen}>
                <Stack>
                    <Text>App clip content goes here</Text>
                    <Button onClick={() => setOpened(false)}>Close</Button>
                </Stack>
            </RMAppClip>
        </Box>
    );
};
