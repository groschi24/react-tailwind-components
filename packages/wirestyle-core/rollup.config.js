import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postCSS from 'rollup-plugin-postcss';

import pkg from './package.json';

export default {
  watch: {
    include: 'src/**',
  },
  input: 'src/index.ts',
  output: [
    {
      file: './lib/cjs/index.js',
      format: 'cjs',
    },
    {
      file: './lib/esm/index.js',
      format: 'es',
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      typescript: require('typescript'),
    }),
    postCSS({
      config: {
        path: './postcss.config.js',
      },
      extensions: ['.css'],
      minimize: true,
      extract: 'wirestyle.css',
    }),
  ],
};
