import { RMErrorBoundary } from './rm-error-boundary';
import { BuggyCounter } from './buggy-counter';

export default {
    title: 'RMErrorBoundary',
    component: RMErrorBoundary,
};

export const Basic = () => {
    return (
        <RMErrorBoundary allowReset>
            <BuggyCounter />
        </RMErrorBoundary>
    );
};
