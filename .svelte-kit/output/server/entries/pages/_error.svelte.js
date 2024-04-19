import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { H as Header, F as Footer } from "../../chunks/Footer.js";
import { B as Button } from "../../chunks/Button.js";
import { E as Error } from "../../chunks/error.js";
const css = {
  code: ".error-page.svelte-1ezp2f5.svelte-1ezp2f5{background:var(--color--page-background);position:relative}.container.svelte-1ezp2f5.svelte-1ezp2f5{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;text-align:center}.container.svelte-1ezp2f5 .svg-wrapper.svelte-1ezp2f5{width:300px;margin-top:-60px;margin-bottom:-30px}.container.svelte-1ezp2f5 .svg-wrapper.svelte-1ezp2f5 svg{filter:drop-shadow(2px 6px 0px rgba(0, 0, 0, 0.1))}",
  map: `{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script>\\n\\timport Header from '$lib/components/organisms/Header.svelte';\\n\\timport Footer from '$lib/components/organisms/Footer.svelte';\\n\\n\\timport Button from '$lib/components/atoms/Button.svelte';\\n\\timport Error from '$lib/icons/error.svelte';\\n<\/script>\\n<style lang=\\"scss\\">.error-page {\\n  background: var(--color--page-background);\\n  position: relative;\\n}\\n\\n.container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  min-height: 60vh;\\n  text-align: center;\\n}\\n.container .svg-wrapper {\\n  width: 300px;\\n  margin-top: -60px;\\n  margin-bottom: -30px;\\n}\\n.container .svg-wrapper :global(svg) {\\n  filter: drop-shadow(2px 6px 0px rgba(0, 0, 0, 0.1));\\n}</style>\\n\\n\\n<Header showBackground />\\n<main>\\n\\t<div class=\\"error-page\\">\\n\\t\\t<div class=\\"container\\">\\n\\t\\t\\t<h1>Oh no!</h1>\\n\\t\\t\\t<div class=\\"svg-wrapper\\">\\n\\t\\t\\t\\t<Error />\\n\\t\\t\\t</div>\\n\\t\\t\\t<p>It seems like coffee was spilled all over this page, and now it can't be displayed.</p>\\n\\t\\t\\t<br />\\n\\t\\t\\t<Button href=\\"/\\">Start over</Button>\\n\\t\\t</div>\\n\\t</div>\\n</main>\\n<Footer />\\n\\n"],"names":[],"mappings":"AAOmB,yCAAY,CAC7B,UAAU,CAAE,IAAI,wBAAwB,CAAC,CACzC,QAAQ,CAAE,QACZ,CAEA,wCAAW,CACT,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,MACd,CACA,yBAAU,CAAC,2BAAa,CACtB,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,KACjB,CACA,yBAAU,CAAC,2BAAY,CAAS,GAAK,CACnC,MAAM,CAAE,YAAY,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACpD"}`
};
const Error_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, { showBackground: true }, {}, {})} <main><div class="error-page svelte-1ezp2f5"><div class="container svelte-1ezp2f5"><h1 data-svelte-h="svelte-14caqax">Oh no!</h1> <div class="svg-wrapper svelte-1ezp2f5">${validate_component(Error, "Error").$$render($$result, {}, {}, {})}</div> <p data-svelte-h="svelte-9ydm1k">It seems like coffee was spilled all over this page, and now it can&#39;t be displayed.</p> <br> ${validate_component(Button, "Button").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `Start over`;
    }
  })}</div></div></main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Error_1 as default
};
