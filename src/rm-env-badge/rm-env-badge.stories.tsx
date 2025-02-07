import { RMEnvBadge } from './rm-env-badge';
import { RmgEnv } from '@railmapgen/rmg-runtime';
import { Stack } from '@mantine/core';

export default {
    title: 'RMEnvBadge',
    component: RMEnvBadge,
};

export const Basic = () => {
    return (
        <Stack>
            <RMEnvBadge env={RmgEnv.DEV} ver="1.2.3" />
            <RMEnvBadge env={RmgEnv.UAT} ver="1.2.3" />
            <RMEnvBadge env={RmgEnv.PRD} ver="1.2.3" />
        </Stack>
    );
};
