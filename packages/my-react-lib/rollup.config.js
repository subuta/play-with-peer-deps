import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
  external: ['react'],
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      name: 'myReactLib',
      format: 'umd',
      globals: {
        'react': 'React'
      }
    }
  ],
  plugins: [
    babel(),
    commonjs()
  ]
}