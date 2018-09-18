import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'src/index.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'liftitSkeleton',
  dest: 'dist/liftit-skeleton.js',
  plugins: [
    babel({
      babelrc: false,
      presets: ['@babel/preset-env', '@babel/preset-react']
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    uglify()
  ]
}
