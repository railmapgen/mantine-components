import '@testing-library/jest-dom';
import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { RMMantineProvider } from './rm-mantine-provider';

interface TestingProviderProps {
    children?: ReactNode;
}

const TestingProvider = (props: TestingProviderProps) => {
    const { children } = props;
    return <RMMantineProvider>{children}</RMMantineProvider>;
};

const initialOptions: Omit<RenderOptions, 'wrapper'> = {};

const customRender = (ui: ReactElement, renderOptions = initialOptions) => {
    return render(ui, { wrapper: TestingProvider, ...renderOptions });
};

export { customRender as render };
