import rollup from 'rollup';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'build/ts_build/game.main.js',
  dest: 'build/dist/build.js',
  sourceMap: true,
  sourceMapFile: 'build/dist/build.js.map',
  format: 'iife',
  plugins: [
    nodeResolve({ jsnext: true, module: true })
  ]
}
