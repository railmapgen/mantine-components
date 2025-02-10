import { render } from '../test-utils';
import { screen } from '@testing-library/react';
import { BuggyCounter } from './buggy-counter';
import { RMErrorBoundary } from './rm-error-boundary';
import { userEvent } from '@testing-library/user-event';

describe('RMErrorBoundary', () => {
    const user = userEvent.setup();

    it('Can show alert when children component throws error', async () => {
        render(
            <RMErrorBoundary>
                <BuggyCounter />
            </RMErrorBoundary>
        );

        expect(screen.getByRole('heading')).toHaveTextContent(/Click me/);

        await user.click(screen.getByRole('heading'));
        await user.click(screen.getByRole('heading'));
        await user.click(screen.getByRole('heading'));
        await user.click(screen.getByRole('heading'));
        await user.click(screen.getByRole('heading'));

        expect(screen.getByRole('alert')).toHaveTextContent(/Something went wrong/);
        expect(screen.queryByRole('button', { name: 'reset this app' })).not.toBeInTheDocument();
    });

    it('Can show reset app dialog as expected', async () => {
        render(
            <RMErrorBoundary allowReset>
                <BuggyCounter />
            </RMErrorBoundary>
        );

        await user.click(screen.getByRole('heading'));
        await user.click(screen.getByRole('heading'));
        await user.click(screen.getByRole('heading'));
        await user.click(screen.getByRole('heading'));
        await user.click(screen.getByRole('heading'));

        expect(screen.getByRole('button', { name: 'reset this app' })).toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: 'reset this app' }));
        await screen.findByRole('dialog', { name: 'Warning 警告' });
    });
});
