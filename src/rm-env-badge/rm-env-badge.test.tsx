import { render } from '../test-utils';
import { RMEnvBadge } from './rm-env-badge';
import { RmgEnv } from '@railmapgen/rmg-runtime';
import { screen } from '@testing-library/react';

describe('RMEnvBadge', () => {
    it('Can show DEV badge as expected', () => {
        render(<RMEnvBadge env={RmgEnv.DEV} ver="1.2.3" />);

        expect(screen.getByText('DEV')).toBeInTheDocument();
        expect(screen.queryByText('1.2.3')).not.toBeInTheDocument();
    });

    it('Can show UAT badge as expected', () => {
        render(<RMEnvBadge env={RmgEnv.UAT} ver="1.2.3" />);

        expect(screen.getByText('UAT')).toBeInTheDocument();
        expect(screen.queryByText('1.2.3')).not.toBeInTheDocument();
    });

    it('Can show PRD badge as expected', () => {
        render(<RMEnvBadge env={RmgEnv.PRD} ver="1.2.3" />);

        expect(screen.queryByText('PRD')).not.toBeInTheDocument();
        expect(screen.getByText('1.2.3')).toBeInTheDocument();
    });
});
