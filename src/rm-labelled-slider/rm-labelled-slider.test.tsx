import { render } from '../test-utils';
import { RMLabelledSlider } from './rm-labelled-slider';
import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

describe('RMLabelledSlider', () => {
    const user = userEvent.setup();

    it('Can control slider value via external buttons', async () => {
        render(
            <RMLabelledSlider
                fieldLabel="Test field"
                withExternalControls
                leftIconLabel="Zoom out"
                rightIconLabel="Zoom in"
            />
        );

        const slider = screen.getByRole('slider', { name: 'Test field' });
        expect(slider).toHaveValue(0);

        await user.click(screen.getByRole('button', { name: 'Zoom in' }));
        await user.click(screen.getByRole('button', { name: 'Zoom in' }));
        expect(slider).toHaveValue(2);

        await user.click(screen.getByRole('button', { name: 'Zoom out' }));
        expect(slider).toHaveValue(1);
    });
});
