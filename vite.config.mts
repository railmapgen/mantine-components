import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { coverageConfigDefaults } from 'vitest/config';

// https://vitejs.dev/config
export default defineConfig({
    base: '/mantine-components/',
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
        watch: false,
        coverage: {
            provider: 'v8',
            skipFull: true,
            exclude: [...coverageConfigDefaults.exclude, '**/*.stories.tsx'],
            include: ['src'],
        },
    },
});
