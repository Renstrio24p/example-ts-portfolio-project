import * as esbuild from 'esbuild'
import LiveServer from 'alive-server'
import imagePlugin from 'esbuild-plugin-inline-image'
import copy from 'esbuild-copy-static-files'

const Server = ()=>{
    const liveParams = { root: 'dist', port: 4650, host: 'localhost', file: 'index.html', fallback: '/index.html'}
    LiveServer.start(liveParams)
}
const EsbuildOptions = {
        entryPoints:['src/index.ts','index.html'],
        outdir: 'dist',
        bundle: true,
        minify: true,
        splitting: true,
        format: 'esm',
        chunkNames: 'src/[name]-[hash]',
        // sourcemap: true,
        loader: {
            '.html':'copy',
            '.png':'copy',
            '.ts':'ts'
        },
        plugins: [
            imagePlugin(),
            copy({
                src: './src/images',
                dest: './dist',
                recursive: true,
              })
        ],
        define: { 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'), 'process.env': JSON.stringify(process.env) },
    }

    if(process.argv.includes('--build')){
        await esbuild.build(EsbuildOptions).catch(() => {
            process.exit(1)
        });
    } else {
        const ctx = await esbuild.context(EsbuildOptions).catch(() => {
            process.exit(1)
        });
        ctx.watch()
        for(let i = 0; i < 10; i++){
            ctx.rebuild()
        }
        Server()
    }

    // DIY config by. Waren TypeScript Dev
