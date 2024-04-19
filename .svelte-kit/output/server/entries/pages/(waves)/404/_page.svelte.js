import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { B as Button } from "../../../../chunks/Button.js";
import { E as Error } from "../../../../chunks/error.js";
const css = {
  code: ".error-page.svelte-1ezp2f5.svelte-1ezp2f5{background:var(--color--page-background);position:relative}.container.svelte-1ezp2f5.svelte-1ezp2f5{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;text-align:center}.container.svelte-1ezp2f5 .svg-wrapper.svelte-1ezp2f5{width:300px;margin-top:-60px;margin-bottom:-30px}.container.svelte-1ezp2f5 .svg-wrapper.svelte-1ezp2f5 svg{filter:drop-shadow(2px 6px 0px rgba(0, 0, 0, 0.1))}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport Button from '$lib/components/atoms/Button.svelte';\\n\\timport Error from '$lib/icons/error.svelte';\\n<\/script>\\n<style lang=\\"scss\\">.error-page {\\n  background: var(--color--page-background);\\n  position: relative;\\n}\\n\\n.container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  min-height: 60vh;\\n  text-align: center;\\n}\\n.container .svg-wrapper {\\n  width: 300px;\\n  margin-top: -60px;\\n  margin-bottom: -30px;\\n}\\n.container .svg-wrapper :global(svg) {\\n  filter: drop-shadow(2px 6px 0px rgba(0, 0, 0, 0.1));\\n}</style>\\n\\n\\n<div class=\\"error-page\\">\\n\\t<div class=\\"container\\">\\n\\t\\t<h1>Oh no! 404!</h1>\\n\\t\\t<div class=\\"svg-wrapper\\">\\n\\t\\t\\t<Error />\\n\\t\\t</div>\\n\\t\\t<p>It seems like coffee was spilled all over this page, and now it can't be displayed.</p>\\n\\t\\t<br />\\n\\t\\t<Button href=\\"/\\">Start over</Button>\\n\\t</div>\\n</div>\\n\\n"],"names":[],"mappings":"AAImB,yCAAY,CAC7B,UAAU,CAAE,IAAI,wBAAwB,CAAC,CACzC,QAAQ,CAAE,QACZ,CAEA,wCAAW,CACT,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,MACd,CACA,yBAAU,CAAC,2BAAa,CACtB,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,KACjB,CACA,yBAAU,CAAC,2BAAY,CAAS,GAAK,CACnC,MAAM,CAAE,YAAY,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACpD"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="error-page svelte-1ezp2f5"><div class="container svelte-1ezp2f5"><h1 data-svelte-h="svelte-eusfku">Oh no! 404!</h1> <div class="svg-wrapper svelte-1ezp2f5">${validate_component(Error, "Error").$$render($$result, {}, {}, {})}</div> <p data-svelte-h="svelte-9ydm1k">It seems like coffee was spilled all over this page, and now it can&#39;t be displayed.</p> <br> ${validate_component(Button, "Button").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `Start over`;
    }
  })}</div></div>`;
});
export {
  Page as default
};
