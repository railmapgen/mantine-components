import { defineBuildConfig } from 'unbuild';
import postcss from 'rollup-plugin-postcss';

export default defineBuildConfig({
    hooks: {
        'rollup:options'(_ctx, options) {
            options.plugins.pop(); // remove rawPlugin
            options.plugins.push(postcss({ extract: true, modules: true }));
        },
    },
    rollup: {
        output: {
            // preserveModules: true,
        },
        resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
        replace: {
            preventAssignment: true,
        },
        esbuild: {
            jsx: 'automatic',
        },
    },
});
