import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CJcjUdVk.mjs';
import { manifest } from './manifest_B8LQnWfJ.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about-us.astro.mjs');
const _page2 = () => import('./pages/api/submit.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/portfolio.astro.mjs');
const _page5 = () => import('./pages/project/_id_.astro.mjs');
const _page6 = () => import('./pages/rss.xml.astro.mjs');
const _page7 = () => import('./pages/service/_id_.astro.mjs');
const _page8 = () => import('./pages/sister-concerns.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about-us.astro", _page1],
    ["src/pages/api/submit.ts", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/portfolio.astro", _page4],
    ["src/pages/project/[id].astro", _page5],
    ["src/pages/rss.xml.js", _page6],
    ["src/pages/service/[id].astro", _page7],
    ["src/pages/sister-concerns.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4dc7e95c-98fe-437f-bf67-49e3622a0dc6",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
