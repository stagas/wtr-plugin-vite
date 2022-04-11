<h1>
wtr-plugin-vite <a href="https://npmjs.org/package/wtr-plugin-vite"><img src="https://img.shields.io/badge/npm-v0.0.1-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-67-FFF.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

Vite plugin for WebTestRunner

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i wtr-plugin-vite </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add wtr-plugin-vite </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add wtr-plugin-vite</code>
</td></tr></table>
</h4>

## Examples

<details id="example$node" title="node" open><summary><span><a href="#example$node">#</a></span>  <code><strong>node</strong></code></summary>  <ul>    <details id="source$node" title="node source code" open><summary><span><a href="#source$node">#</a></span>  <code><strong>view source</strong></code></summary>  <a href="example/node.ts">example/node.ts</a>  <p>

```ts
const { vite } = require('wtr-plugin-vite')

module.exports = {
  plugins: [vite()],
}
```

</p>
</details></ul></details>

## API

<p>  <details id="vite$1" title="Function" open><summary><span><a href="#vite$1">#</a></span>  <code><strong>vite</strong></code><em>(viteConfig)</em>    </summary>  <a href="src/vite.ts#L8">src/vite.ts#L8</a>  <ul>    <p>    <details id="viteConfig$3" title="Parameter" ><summary><span><a href="#viteConfig$3">#</a></span>  <code><strong>viteConfig</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>{}</code></span>  </summary>    <ul><p><span>InlineConfig</span> &amp; {<p>  <details id="jsxImportSource$5" title="Property" ><summary><span><a href="#jsxImportSource$5">#</a></span>  <code><strong>jsxImportSource</strong></code>    </summary>  <a href="src/vite.ts#L8">src/vite.ts#L8</a>  <ul><p>string</p>        </ul></details></p>}</p>        </ul></details>  <p><strong>vite</strong><em>(viteConfig)</em>  &nbsp;=&gt;  <ul>{<p>  <details id="name$7" title="Property" ><summary><span><a href="#name$7">#</a></span>  <code><strong>name</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>'vite-plugin'</code></span>  </summary>    <ul><p>string</p>        </ul></details><details id="serverStart$8" title="Method" ><summary><span><a href="#serverStart$8">#</a></span>  <code><strong>serverStart</strong></code><em>(any)</em>    </summary>  <a href="src/vite.ts#L14">src/vite.ts#L14</a>  <ul>    <p>    any  <p><strong>serverStart</strong><em>(any)</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;void&gt;</ul></p></p>    </ul></details><details id="serverStop$11" title="Method" ><summary><span><a href="#serverStop$11">#</a></span>  <code><strong>serverStop</strong></code><em>()</em>    </summary>  <a href="src/vite.ts#L69">src/vite.ts#L69</a>  <ul>    <p>      <p><strong>serverStop</strong><em>()</em>  &nbsp;=&gt;  <ul><span>Promise</span>&lt;void&gt;</ul></p></p>    </ul></details></p>}</ul></p></p>    </ul></details></p>

## Credits

- [@babel/plugin-transform-react-jsx](https://npmjs.org/package/@babel/plugin-transform-react-jsx) by [The Babel Team](https://babel.dev/team) &ndash; Turn JSX into React function calls
- [@babel/plugin-transform-typescript](https://npmjs.org/package/@babel/plugin-transform-typescript) by [The Babel Team](https://babel.dev/team) &ndash; Transform TypeScript into ES.next
- [@originjs/vite-plugin-commonjs](https://npmjs.org/package/@originjs/vite-plugin-commonjs) by [jiawulin](https://github.com/originjs) &ndash; A vite plugin that support commonjs to esm in vite
- [vite](https://npmjs.org/package/vite) by [Evan You](https://github.com/vitejs) &ndash; Native-ESM powered web dev build tool
- [vite-plugin-babel-dev](https://npmjs.org/package/vite-plugin-babel-dev) by [Miłosz Mandowski](https://github.com/owlsdepartment) &ndash; Runs babel during dev serve in Vite

## Contributing

[Fork](https://github.com/stagas/wtr-plugin-vite/fork) or [edit](https://github.dev/stagas/wtr-plugin-vite) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
