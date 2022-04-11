import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { InlineConfig as ViteConfig, mergeConfig, ViteDevServer } from 'vite'
import { createServer } from 'vite'
import babel from 'vite-plugin-babel-dev'

// based on https://github.com/material-svelte/vite-web-test-runner-plugin

export const vite = (viteConfig: ViteConfig & { jsxImportSource?: string } = {}) => {
  let server: ViteDevServer

  return {
    name: 'vite-plugin',

    async serverStart({ app }: any) {
      const config = mergeConfig(viteConfig ?? {}, {
        root: '.',
        clearScreen: false,
        server: {
          https: false,
          cors: true,
          force: true,
          host: true,
        },
        build: {
          target: 'esnext',
        },
        plugins: [
          babel({
            babelConfig: {
              cwd: viteConfig.root ?? '.',
              sourceMaps: true,
              plugins: [
                [
                  '@babel/plugin-transform-react-jsx',
                  {
                    throwIfNamespace: false,
                    runtime: 'automatic',
                    importSource: viteConfig.jsxImportSource ?? 'react',
                    useBuiltIns: true,
                    useSpread: true,
                  },
                ],
                [
                  '@babel/plugin-transform-typescript',
                  {
                    isTSX: true,
                    allExtensions: true,
                    allowDeclareFields: true,
                  },
                ],
              ],
            },
            filter: /\.[jt]sx(\?[\w\d=-]+)?$/,
          }),
          viteCommonjs(),
        ],
      })

      server = await createServer(config)
      await server.listen()
      const port = server.config.server.port
      const protocol = server.config.server.https ? 'https' : 'http'
      app.use((ctx: any) => {
        ctx.redirect(`${protocol}://localhost:${port}${ctx.originalUrl}`)
        return
      })
    },

    async serverStop() {
      return server.close()
    },
  }
}
