import { render } from '../test-utils';
import { RMLabelledSegmentedControl } from './rm-labelled-segmented-control';
import { screen } from '@testing-library/react';

describe('RMLabelledSegmentedControl', () => {
    it('Can pass a11y testing', () => {
        render(
            <RMLabelledSegmentedControl
                label="Test field"
                data={[
                    { label: 'Black', value: '#000' },
                    { label: 'White', value: '#fff' },
                ]}
            />
        );

        expect(screen.getByRole('radiogroup', { name: 'Test field' })).toBeInTheDocument();
        expect(screen.getByRole('radio', { name: 'Black' })).toBeInTheDocument();
        expect(screen.getByRole('radio', { name: 'White' })).toBeInTheDocument();
    });
});
