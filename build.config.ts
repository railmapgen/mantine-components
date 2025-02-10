import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
    rollup: {
        esbuild: {
            // This line is the important one
            jsx: 'automatic',
        },
    },
});
