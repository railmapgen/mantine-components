import { defineBuildConfig } from 'unbuild';
import postcss from 'rollup-plugin-postcss';
import { createGenerateScopedName } from 'hash-css-selector';

export default defineBuildConfig({
    hooks: {
        'rollup:options'(_ctx, options) {
            options.plugins.pop(); // remove rawPlugin
            options.plugins.push(
                postcss({
                    extract: true,
                    modules: { generateScopedName: createGenerateScopedName('rm') },
                })
            );
        },
    },
    rollup: {
        output: {
            // preserveModules: true,
            compact: true,
        },
        // resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
        // replace: {
        //     preventAssignment: true,
        // },
        esbuild: {
            jsx: 'automatic',
        },
    },
});
