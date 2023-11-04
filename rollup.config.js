import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import packageJson from './package.json' assert { type: 'json' };

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: [resolve(), commonjs(), typescript()],
    external: [
      ...Object.keys(packageJson.devDependencies || {}),
      ...Object.keys(packageJson.peerDependencies || {})
    ]
  },
  {
    input: 'src/search-functions.ts',
    output: [
      {
        file: 'dist/cjs/search-functions.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        file: 'dist/esm/search-functions.js',
        format: 'esm',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: [resolve(), commonjs(), typescript()],
    external: [
      ...Object.keys(packageJson.devDependencies || {}),
      ...Object.keys(packageJson.peerDependencies || {})
    ]
  },
  {
    input: 'src/search.ts',
    output: [
      {
        file: 'dist/cjs/search.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        file: 'dist/esm/search.js',
        format: 'esm',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: [resolve(), commonjs(), typescript()],
    external: [
      ...Object.keys(packageJson.devDependencies || {}),
      ...Object.keys(packageJson.peerDependencies || {})
    ]
  },
  {
    input: 'src/utils.ts',
    output: [
      {
        file: 'dist/cjs/utils.js',
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        file: 'dist/esm/utils.js',
        format: 'esm',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: [resolve(), commonjs(), typescript()],
    external: [
      ...Object.keys(packageJson.devDependencies || {}),
      ...Object.keys(packageJson.peerDependencies || {})
    ]
  }
];
