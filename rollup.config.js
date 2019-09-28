import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';

export default {
    input: 'src/index.js',
    output: {
        dir: 'lib',
        format: 'cjs',
        sourcemap: true,
        exports: 'named'
    },
    plugins: [
        commonjs({
            include: ['node_modules/**']
        }),
        babel({
            exclude: ['node_modules/**']
        }),
        resolve(),
        json()
    ]
};