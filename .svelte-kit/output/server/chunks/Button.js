import { c as create_ssr_component, h as compute_rest_props, i as spread, j as escape_object, k as escape_attribute_value, l as compute_slots } from "./ssr.js";
import { i as is_void, H as HttpRegex } from "./regex.js";
const css = {
  code: ".button.svelte-6zxw49.svelte-6zxw49{--main-color:red;--light-color:blue;--contrast-color:green;-webkit-appearance:none;appearance:none;cursor:pointer;text-decoration:none;transition:all 0.2s ease-in-out;display:flex;align-items:center;justify-content:center;gap:5px;border:none;border-radius:20px;font-weight:700}.button.svelte-6zxw49 .icon.svelte-6zxw49{width:24px;height:24px}.button.color--primary.svelte-6zxw49.svelte-6zxw49{--main-color:var(--color--primary-rgb);--light-color:var(--color--primary-tint-rgb);--contrast-color:var(--color--primary-contrast)}.button.color--secondary.svelte-6zxw49.svelte-6zxw49{--main-color:var(--color--secondary-rgb);--light-color:var(--color--secondary-tint-rgb);--contrast-color:var(--color--secondary-contrast)}.button.style--solid.svelte-6zxw49.svelte-6zxw49{background-color:rgb(var(--main-color));color:var(--contrast-color)}.button.style--solid.svelte-6zxw49.svelte-6zxw49:hover{box-shadow:0px 0px 1px 7px rgba(var(--main-color), 0.3)}.button.style--understated.svelte-6zxw49.svelte-6zxw49{background-color:rgb(var(--light-color));color:rgb(var(--main-color))}.button.style--understated.svelte-6zxw49.svelte-6zxw49:hover{box-shadow:0px 0px 1px 7px rgba(var(--main-color), 0.3)}.button.style--clear.svelte-6zxw49.svelte-6zxw49{background-color:transparent;color:rgb(var(--main-color))}.button.style--clear.svelte-6zxw49.svelte-6zxw49:hover{background-color:rgb(var(--light-color))}.button.size--small.svelte-6zxw49.svelte-6zxw49{padding:5px 10px;font-size:0.75rem}.button.size--small.svelte-6zxw49 .icon.svelte-6zxw49{width:20px;height:20px}.button.size--medium.svelte-6zxw49.svelte-6zxw49{padding:10px 20px;font-size:1rem}.button.size--large.svelte-6zxw49.svelte-6zxw49{padding:15px 30px;font-size:1.15rem}.button.size--large.svelte-6zxw49 .icon.svelte-6zxw49{width:28px;height:28px}",
  map: '{"version":3,"file":"Button.svelte","sources":["Button.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { HttpRegex } from \\"$lib/utils/regex\\";\\nexport let color = \\"primary\\";\\nexport let style = \\"solid\\";\\nexport let size = \\"medium\\";\\nexport let href = void 0;\\nexport let additionalClass = void 0;\\nconst isExternalLink = !!href && HttpRegex.test(href);\\nexport let target = isExternalLink ? \\"_blank\\" : \\"_self\\";\\nexport let rel = isExternalLink ? \\"noopener noreferrer\\" : void 0;\\n$:\\n  tag = href ? \\"a\\" : \\"button\\";\\n$:\\n  linkProps = {\\n    href,\\n    target,\\n    rel\\n  };\\n<\/script>\\n<style lang=\\"scss\\">.button {\\n  --main-color: red;\\n  --light-color: blue;\\n  --contrast-color: green;\\n  -webkit-appearance: none;\\n  appearance: none;\\n  cursor: pointer;\\n  text-decoration: none;\\n  transition: all 0.2s ease-in-out;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 5px;\\n  border: none;\\n  border-radius: 20px;\\n  font-weight: 700;\\n}\\n.button .icon {\\n  width: 24px;\\n  height: 24px;\\n}\\n.button.color--primary {\\n  --main-color: var(--color--primary-rgb);\\n  --light-color: var(--color--primary-tint-rgb);\\n  --contrast-color: var(--color--primary-contrast);\\n}\\n.button.color--secondary {\\n  --main-color: var(--color--secondary-rgb);\\n  --light-color: var(--color--secondary-tint-rgb);\\n  --contrast-color: var(--color--secondary-contrast);\\n}\\n.button.style--solid {\\n  background-color: rgb(var(--main-color));\\n  color: var(--contrast-color);\\n}\\n.button.style--solid:hover {\\n  box-shadow: 0px 0px 1px 7px rgba(var(--main-color), 0.3);\\n}\\n.button.style--understated {\\n  background-color: rgb(var(--light-color));\\n  color: rgb(var(--main-color));\\n}\\n.button.style--understated:hover {\\n  box-shadow: 0px 0px 1px 7px rgba(var(--main-color), 0.3);\\n}\\n.button.style--clear {\\n  background-color: transparent;\\n  color: rgb(var(--main-color));\\n}\\n.button.style--clear:hover {\\n  background-color: rgb(var(--light-color));\\n}\\n.button.size--small {\\n  padding: 5px 10px;\\n  font-size: 0.75rem;\\n}\\n.button.size--small .icon {\\n  width: 20px;\\n  height: 20px;\\n}\\n.button.size--medium {\\n  padding: 10px 20px;\\n  font-size: 1rem;\\n}\\n.button.size--large {\\n  padding: 15px 30px;\\n  font-size: 1.15rem;\\n}\\n.button.size--large .icon {\\n  width: 28px;\\n  height: 28px;\\n}</style>\\n\\n\\n<svelte:element\\n\\tthis={tag}\\n\\t{...linkProps}\\n\\tclass={[\'button\', `style--${style}`, `size--${size}`, `color--${color}`, additionalClass].join(\\n\\t\\t\' \'\\n\\t)}\\n\\tdata-sveltekit-preload-data\\n\\ton:click\\n\\t{...$$restProps}\\n>\\n\\t{#if $$slots[\'icon\']}\\n\\t\\t<div class=\\"icon\\">\\n\\t\\t\\t<slot name=\\"icon\\" />\\n\\t\\t</div>\\n\\t{/if}\\n\\t<slot />\\n</svelte:element>\\n\\n"],"names":[],"mappings":"AAkBmB,mCAAQ,CACzB,YAAY,CAAE,GAAG,CACjB,aAAa,CAAE,IAAI,CACnB,gBAAgB,CAAE,KAAK,CACvB,kBAAkB,CAAE,IAAI,CACxB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,OAAO,CACf,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,WAAW,CAChC,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,GAAG,CAAE,GAAG,CACR,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,WAAW,CAAE,GACf,CACA,qBAAO,CAAC,mBAAM,CACZ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV,CACA,OAAO,2CAAgB,CACrB,YAAY,CAAE,yBAAyB,CACvC,aAAa,CAAE,8BAA8B,CAC7C,gBAAgB,CAAE,8BACpB,CACA,OAAO,6CAAkB,CACvB,YAAY,CAAE,2BAA2B,CACzC,aAAa,CAAE,gCAAgC,CAC/C,gBAAgB,CAAE,gCACpB,CACA,OAAO,yCAAc,CACnB,gBAAgB,CAAE,IAAI,IAAI,YAAY,CAAC,CAAC,CACxC,KAAK,CAAE,IAAI,gBAAgB,CAC7B,CACA,OAAO,yCAAa,MAAO,CACzB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,IAAI,YAAY,CAAC,CAAC,CAAC,GAAG,CACzD,CACA,OAAO,+CAAoB,CACzB,gBAAgB,CAAE,IAAI,IAAI,aAAa,CAAC,CAAC,CACzC,KAAK,CAAE,IAAI,IAAI,YAAY,CAAC,CAC9B,CACA,OAAO,+CAAmB,MAAO,CAC/B,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,IAAI,YAAY,CAAC,CAAC,CAAC,GAAG,CACzD,CACA,OAAO,yCAAc,CACnB,gBAAgB,CAAE,WAAW,CAC7B,KAAK,CAAE,IAAI,IAAI,YAAY,CAAC,CAC9B,CACA,OAAO,yCAAa,MAAO,CACzB,gBAAgB,CAAE,IAAI,IAAI,aAAa,CAAC,CAC1C,CACA,OAAO,wCAAa,CAClB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,SAAS,CAAE,OACb,CACA,OAAO,0BAAY,CAAC,mBAAM,CACxB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV,CACA,OAAO,yCAAc,CACnB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,SAAS,CAAE,IACb,CACA,OAAO,wCAAa,CAClB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,SAAS,CAAE,OACb,CACA,OAAO,0BAAY,CAAC,mBAAM,CACxB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV"}'
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tag;
  let linkProps;
  let $$restProps = compute_rest_props($$props, ["color", "style", "size", "href", "additionalClass", "target", "rel"]);
  let $$slots = compute_slots(slots);
  let { color = "primary" } = $$props;
  let { style = "solid" } = $$props;
  let { size = "medium" } = $$props;
  let { href = void 0 } = $$props;
  let { additionalClass = void 0 } = $$props;
  const isExternalLink = !!href && HttpRegex.test(href);
  let { target = isExternalLink ? "_blank" : "_self" } = $$props;
  let { rel = isExternalLink ? "noopener noreferrer" : void 0 } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.additionalClass === void 0 && $$bindings.additionalClass && additionalClass !== void 0)
    $$bindings.additionalClass(additionalClass);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.rel === void 0 && $$bindings.rel && rel !== void 0)
    $$bindings.rel(rel);
  $$result.css.add(css);
  tag = href ? "a" : "button";
  linkProps = { href, target, rel };
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object(linkProps),
        {
          class: escape_attribute_value([
            "button",
            `style--${style}`,
            `size--${size}`,
            `color--${color}`,
            additionalClass
          ].join(" "))
        },
        { "data-sveltekit-preload-data": true },
        escape_object($$restProps)
      ],
      { classes: "svelte-6zxw49" }
    )}>${is_void(tag$1) ? "" : `${$$slots["icon"] ? `<div class="icon svelte-6zxw49">${slots.icon ? slots.icon({}) : ``}</div>` : ``} ${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
export {
  Button as B
};
