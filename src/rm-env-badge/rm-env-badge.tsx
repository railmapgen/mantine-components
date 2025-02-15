import { RmgEnv } from '@railmapgen/rmg-runtime';
import { Badge, BadgeProps, DefaultMantineColor } from '@mantine/core';

const ENV_COLOUR_MAP: Record<RmgEnv, DefaultMantineColor> = {
    PRD: 'green',
    UAT: 'yellow',
    DEV: 'red',
};

type RMEnvBadgeProps = {
    env: RmgEnv;
    ver: string;
} & BadgeProps;

export const RMEnvBadge = ({ env, ver, ...others }: RMEnvBadgeProps) => {
    return (
        <Badge variant="light" color={ENV_COLOUR_MAP[env]} radius="sm" title={`${env}: ${ver}`} mx={5} {...others}>
            {env === RmgEnv.PRD ? ver : env}
        </Badge>
    );
};
