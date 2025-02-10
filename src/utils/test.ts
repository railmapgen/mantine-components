import ResizeObserverPolyfill from 'resize-observer-polyfill';
import { TextEncoder } from 'node:util';

export const setupTest = () => {
    if (!window.ResizeObserver) {
        window.ResizeObserver = ResizeObserverPolyfill;
    }

    global.TextEncoder = TextEncoder;

    global.window.matchMedia = query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    });
};
