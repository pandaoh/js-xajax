/*
 * @Author: HxB
 * @Date: 2022-05-26 14:08:20
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-29 10:21:43
 * @Description: 打包配置
 * @FilePath: \js-xajax\rollup.config.js
 */
import path from 'path';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const getPath = (_path) => path.resolve(__dirname, _path);

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

/** @type {import('rollup').RollupOptions} */
const options = {
  input: getPath('src/index.ts'),
  output: [
    {
      file: getPath(pkg.main),
      format: 'cjs',
      name: 'xajax',
      exports: 'named',
      plugins: [terser()]
    },
    {
      file: getPath(pkg.module),
      format: 'es',
      name: 'xajax',
      exports: 'named',
      plugins: [terser()]
    },
    {
      file: getPath(pkg.unpkg),
      format: 'umd',
      name: 'xajax',
      exports: 'named',
      plugins: [terser()]
    },
    {
      file: getPath(pkg['iife']),
      format: 'iife',
      name: 'xajax',
      exports: 'named',
      plugins: [terser()]
    },
    {
      file: getPath(pkg['main-source']),
      format: 'cjs', // lib
      name: 'xajax',
      exports: 'named'
    },
    {
      file: getPath(pkg['module-source']),
      format: 'es', // es
      name: 'xajax',
      exports: 'named'
    },
    {
      file: getPath(pkg['unpkg-source']),
      format: 'umd', // dist
      name: 'xajax',
      exports: 'named'
    },
    {
      file: getPath(pkg['iife-source']),
      format: 'iife',
      name: 'xajax',
      exports: 'named'
    }
  ],
  plugins: [resolve(extensions), commonjs(), typescript({ tsconfig: getPath('tsconfig.json'), extensions })]
};
export default options;
