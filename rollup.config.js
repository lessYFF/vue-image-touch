import rollupVue from 'rollup-plugin-vue'
import rollupCommonjs from 'rollup-plugin-commonjs'
import rollupTypescript from 'rollup-plugin-typescript'
import rollupNodeResolve from 'rollup-plugin-node-resolve'
import rollupServe from 'rollup-plugin-serve'
import { terser } from 'rollup-plugin-terser'
import rollupLivereload from 'rollup-plugin-livereload'

const isDev = process.env.NODE_ENV === 'dev' ? true : false
const input = isDev ? 'example/index.ts' : 'src/index.ts'

export default {
    input,
    output: {
        format: 'umd',
        file: 'lib/index.js',
        name: 'imageTouch',
        globals: {
            vue: 'Vue',
        },
    },
    plugins: [
        rollupVue(),
        rollupCommonjs(),
        rollupTypescript(),
        rollupNodeResolve({ browser: true, jsnext: true }),
        !isDev && terser(),
        isDev && rollupLivereload(),
        isDev &&
            rollupServe({
                port: 8080,
                open: true,
                contentBase: '.',
                openPage: '/example/index.html',
            }),
    ],
    external: ['vue'],
    watch: {
        exclude: 'node_modules/**',
    },
}
