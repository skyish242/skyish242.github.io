import { c as create_ssr_component, a as add_attribute } from "./ssr.js";
const css = {
  code: "img.svelte-1ykl0dj{width:100%;height:100%;object-fit:contain}",
  map: '{"version":3,"file":"Image.svelte","sources":["Image.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { dev } from \\"$app/environment\\";\\nexport let src;\\nexport let alt;\\nexport let fullBleed = void 0;\\nexport let formats = [\\"avif\\", \\"webp\\", \\"png\\"];\\nexport let widths = void 0;\\n$:\\n  fileName = src.split(\\".\\")[0];\\nfunction buildSrcset() {\\n  if (dev)\\n    return;\\n  let srcset = \\"\\";\\n  if (widths) {\\n    for (let i = 0; i < widths.length; i++) {\\n      srcset += `${fileName}-${widths[i]}.${formats[0]} ${widths[i]}w`;\\n      if (i < widths.length - 1) {\\n        srcset += \\", \\";\\n      }\\n    }\\n  } else {\\n    for (let i = 0; i < formats.length; i++) {\\n      srcset += `${fileName}.${formats[i]}`;\\n      if (i < formats.length - 1) {\\n        srcset += \\", \\";\\n      }\\n    }\\n  }\\n  return srcset;\\n}\\n<\/script>\\n<style lang=\\"scss\\">img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: contain;\\n}</style>\\n\\n\\n<img srcset={buildSrcset()} {src} {alt} loading=\\"lazy\\" decoding=\\"async\\" class:full-bleed={fullBleed} />\\n\\n"],"names":[],"mappings":"AA8BmB,kBAAI,CACrB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,OACd"}'
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fileName;
  let { src } = $$props;
  let { alt } = $$props;
  let { fullBleed = void 0 } = $$props;
  let { formats = ["avif", "webp", "png"] } = $$props;
  let { widths = void 0 } = $$props;
  function buildSrcset() {
    let srcset = "";
    if (widths) {
      for (let i = 0; i < widths.length; i++) {
        srcset += `${fileName}-${widths[i]}.${formats[0]} ${widths[i]}w`;
        if (i < widths.length - 1) {
          srcset += ", ";
        }
      }
    } else {
      for (let i = 0; i < formats.length; i++) {
        srcset += `${fileName}.${formats[i]}`;
        if (i < formats.length - 1) {
          srcset += ", ";
        }
      }
    }
    return srcset;
  }
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.fullBleed === void 0 && $$bindings.fullBleed && fullBleed !== void 0)
    $$bindings.fullBleed(fullBleed);
  if ($$props.formats === void 0 && $$bindings.formats && formats !== void 0)
    $$bindings.formats(formats);
  if ($$props.widths === void 0 && $$bindings.widths && widths !== void 0)
    $$bindings.widths(widths);
  $$result.css.add(css);
  fileName = src.split(".")[0];
  return `<img${add_attribute("srcset", buildSrcset(), 0)}${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} loading="lazy" decoding="async" class="${["svelte-1ykl0dj", fullBleed ? "full-bleed" : ""].join(" ").trim()}">`;
});
export {
  Image as I
};
