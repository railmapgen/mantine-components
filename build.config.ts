import { defineBuildConfig } from 'unbuild';
import postcss from 'rollup-plugin-postcss';

export default defineBuildConfig({
    hooks: {
        'rollup:options'(_ctx, options) {
            options.plugins.unshift(postcss({ extract: true }));
        },
    },
    rollup: {
        esbuild: {
            jsx: 'automatic',
        },
    },
});
