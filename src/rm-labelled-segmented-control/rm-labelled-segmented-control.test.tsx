import { render } from '../test-utils';
import { RMLabelledSegmentedControl } from './rm-labelled-segmented-control';
import { screen } from '@testing-library/react';

const selections = [
    { label: 'Black', value: '#000' },
    { label: 'White', value: '#fff' },
];

describe('RMLabelledSegmentedControl', () => {
    it('Can pass a11y testing', () => {
        render(<RMLabelledSegmentedControl label="Test field" data={selections} />);

        expect(screen.getByRole('radiogroup', { name: 'Test field' })).toBeInTheDocument();
        expect(screen.getByRole('radio', { name: 'Black' })).toBeInTheDocument();
        expect(screen.getByRole('radio', { name: 'White' })).toBeInTheDocument();
    });

    it('Can set classname on correct elements', () => {
        render(
            <RMLabelledSegmentedControl
                label="Test field"
                data={selections}
                classNames={{
                    root: 'my-root',
                    label: 'my-label',
                    control: 'my-control',
                }}
            />
        );

        expect(screen.getByText('Test field').parentElement).toHaveClass('my-root');
        expect(screen.getByText('Test field')).toHaveClass('my-label');
        expect(screen.getByRole('radiogroup')).toHaveClass('my-control');
    });
});
