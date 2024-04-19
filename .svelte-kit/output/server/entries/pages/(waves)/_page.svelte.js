import { c as create_ssr_component, b as escape, a as add_attribute, o as onDestroy, e as each, v as validate_component, g as null_to_empty } from "../../../chunks/ssr.js";
import { G as Github, S as Socials } from "../../../chunks/Socials.js";
import { B as Button } from "../../../chunks/Button.js";
import { I as Image } from "../../../chunks/Image.js";
import { C as ContentSection, B as BlogPostCard, a as Card, T as Tag } from "../../../chunks/ContentSection.js";
const Features$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 15v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2zM16 5v4a2 2 0 01-2 2h-4a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2zM22 15v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4a2 2 0 012-2h4a2 2 0 012 2zM6 16v-3M12 6V3M18 16v-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const css$7 = {
  code: ".wrapper.svelte-sixv8c.svelte-sixv8c{position:absolute;pointer-events:none;display:flex;z-index:2;animation:svelte-sixv8c-grow-and-shrink 900ms ease-in-out forwards}.wrapper.svelte-sixv8c svg.svelte-sixv8c{animation:svelte-sixv8c-spin 900ms linear forwards}@keyframes svelte-sixv8c-grow-and-shrink{0%{transform:scale(0)}50%{transform:scale(1)}100%{transform:scale(0)}}@keyframes svelte-sixv8c-spin{from{transform:rotate(0deg)}to{transform:rotate(180deg)}}",
  map: '{"version":3,"file":"SingleSparkle.svelte","sources":["SingleSparkle.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let color;\\nexport let size;\\nexport let style;\\n<\/script>\\n<style lang=\\"scss\\">.wrapper {\\n  position: absolute;\\n  pointer-events: none;\\n  display: flex;\\n  z-index: 2;\\n  animation: grow-and-shrink 900ms ease-in-out forwards;\\n}\\n.wrapper svg {\\n  animation: spin 900ms linear forwards;\\n}\\n\\n@keyframes grow-and-shrink {\\n  0% {\\n    transform: scale(0);\\n  }\\n  50% {\\n    transform: scale(1);\\n  }\\n  100% {\\n    transform: scale(0);\\n  }\\n}\\n@keyframes spin {\\n  from {\\n    transform: rotate(0deg);\\n  }\\n  to {\\n    transform: rotate(180deg);\\n  }\\n}</style>\\n\\n\\n<div class=\\"wrapper\\" style=\\"top: {style.top}; left: {style.left};\\">\\n\\t<svg\\n\\t\\twidth={size}\\n\\t\\theight={size}\\n\\t\\tviewBox=\\"0 0 160 160\\"\\n\\t\\tfill=\\"none\\"\\n\\t\\txmlns=\\"http://www.w3.org/2000/svg\\"\\n\\t>\\n\\t\\t<path\\n\\t\\t\\td=\\"M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z\\"\\n\\t\\t\\tfill={color}\\n\\t\\t/>\\n\\t</svg>\\n</div>\\n\\n"],"names":[],"mappings":"AAImB,oCAAS,CAC1B,QAAQ,CAAE,QAAQ,CAClB,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,6BAAe,CAAC,KAAK,CAAC,WAAW,CAAC,QAC/C,CACA,sBAAQ,CAAC,iBAAI,CACX,SAAS,CAAE,kBAAI,CAAC,KAAK,CAAC,MAAM,CAAC,QAC/B,CAEA,WAAW,6BAAgB,CACzB,EAAG,CACD,SAAS,CAAE,MAAM,CAAC,CACpB,CACA,GAAI,CACF,SAAS,CAAE,MAAM,CAAC,CACpB,CACA,IAAK,CACH,SAAS,CAAE,MAAM,CAAC,CACpB,CACF,CACA,WAAW,kBAAK,CACd,IAAK,CACH,SAAS,CAAE,OAAO,IAAI,CACxB,CACA,EAAG,CACD,SAAS,CAAE,OAAO,MAAM,CAC1B,CACF"}'
};
const SingleSparkle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color } = $$props;
  let { size } = $$props;
  let { style } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$7);
  return `<div class="wrapper svelte-sixv8c" style="${"top: " + escape(style.top, true) + "; left: " + escape(style.left, true) + ";"}"><svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-sixv8c"><path d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"${add_attribute("fill", color, 0)}></path></svg></div>`;
});
const css$6 = {
  code: ".sparkle-wrapper.svelte-exdx8u.svelte-exdx8u{position:relative;display:inline-block}.sparkle-wrapper.svelte-exdx8u .slot-wrapper.svelte-exdx8u{position:relative;z-index:1}",
  map: '{"version":3,"file":"Sparkles.svelte","sources":["Sparkles.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Sparkle from \\"$lib/components/atoms/SingleSparkle.svelte\\";\\nimport { onDestroy, onMount } from \\"svelte\\";\\nconst random = (min, max) => Math.floor(Math.random() * (max - min)) + min;\\nexport let color = \\"default\\";\\nconst generateSparkle = () => {\\n  return {\\n    id: String(random(1e4, 99999)),\\n    createdAt: Date.now(),\\n    color: color === \\"primary\\" ? \\"var(--color--primary)\\" : color === \\"secondary\\" ? \\"var(--color--secondary)\\" : \\"var(--color--yellow\\",\\n    size: random(10, 20),\\n    style: {\\n      // Pick a random spot in the available space\\n      top: random(-10, 80) + \\"%\\",\\n      left: random(0, 100) + \\"%\\"\\n    }\\n  };\\n};\\nlet sparkles = [];\\nlet sparklesInterval;\\nonMount(() => {\\n  sparklesInterval = setInterval(() => {\\n    const now = Date.now();\\n    const sparkle = generateSparkle();\\n    const nextSparkles = sparkles.filter((sparkle2) => {\\n      const delta = now - sparkle2.createdAt;\\n      return delta < 1500;\\n    });\\n    nextSparkles.push(sparkle);\\n    sparkles = nextSparkles;\\n  }, 400);\\n});\\nonDestroy(() => {\\n  clearInterval(sparklesInterval);\\n});\\n<\/script>\\n<style lang=\\"scss\\">.sparkle-wrapper {\\n  position: relative;\\n  display: inline-block;\\n}\\n.sparkle-wrapper .slot-wrapper {\\n  position: relative;\\n  z-index: 1;\\n}</style>\\n\\n\\n<div class=\\"sparkle-wrapper\\">\\n\\t{#each sparkles as sparkle (sparkle.id)}\\n\\t\\t<Sparkle color={sparkle.color} size={sparkle.size} style={sparkle.style} />\\n\\t{/each}\\n\\t<span class=\\"slot-wrapper\\">\\n\\t\\t<slot />\\n\\t</span>\\n</div>\\n\\n"],"names":[],"mappings":"AAmCmB,4CAAiB,CAClC,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YACX,CACA,8BAAgB,CAAC,2BAAc,CAC7B,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CACX"}'
};
const Sparkles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "default" } = $$props;
  let sparkles = [];
  let sparklesInterval;
  onDestroy(() => {
    clearInterval(sparklesInterval);
  });
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$6);
  return `<div class="sparkle-wrapper svelte-exdx8u">${each(sparkles, (sparkle) => {
    return `${validate_component(SingleSparkle, "Sparkle").$$render(
      $$result,
      {
        color: sparkle.color,
        size: sparkle.size,
        style: sparkle.style
      },
      {},
      {}
    )}`;
  })} <span class="slot-wrapper svelte-exdx8u">${slots.default ? slots.default({}) : ``}</span></div>`;
});
const css$5 = {
  code: "#hero.svelte-romlur.svelte-romlur{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:15px;position:relative;padding:80px 0}@media(max-width: 767px){#hero.svelte-romlur.svelte-romlur{padding:40px 0 50px}}#hero.svelte-romlur .hello.svelte-romlur{text-align:center}#hero.svelte-romlur .intro.svelte-romlur{font-weight:500;font-size:1.4rem;width:min(100%, 440px);display:flex;flex-direction:column}#hero.svelte-romlur .intro .left.svelte-romlur{text-align:left}#hero.svelte-romlur .intro .right.svelte-romlur{text-align:right}@media(max-width: 767px){#hero.svelte-romlur .intro.svelte-romlur{display:none}}#hero.svelte-romlur .ctas.svelte-romlur{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px;width:100%}",
  map: `{"version":3,"file":"Hero.svelte","sources":["Hero.svelte"],"sourcesContent":["<script>\\n\\timport FeaturesIcon from '$lib/icons/features.svelte';\\n\\timport GitHubIcon from '$lib/icons/socials/github.svelte';\\n\\timport Button from '$lib/components/atoms/Button.svelte';\\n\\timport Sparkles from '../atoms/Sparkles.svelte';\\n<\/script>\\n<style lang=\\"scss\\">#hero {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 15px;\\n  position: relative;\\n  padding: 80px 0;\\n}\\n@media (max-width: 767px) {\\n  #hero {\\n    padding: 40px 0 50px;\\n  }\\n}\\n#hero .hello {\\n  text-align: center;\\n}\\n#hero .intro {\\n  font-weight: 500;\\n  font-size: 1.4rem;\\n  width: min(100%, 440px);\\n  display: flex;\\n  flex-direction: column;\\n}\\n#hero .intro .left {\\n  text-align: left;\\n}\\n#hero .intro .right {\\n  text-align: right;\\n}\\n@media (max-width: 767px) {\\n  #hero .intro {\\n    display: none;\\n  }\\n}\\n#hero .ctas {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 10px;\\n  width: 100%;\\n}</style>\\n\\n\\n<section id=\\"hero\\">\\n\\t<h1 class=\\"hello\\">This is a SvelteKit Static Blog Template!</h1>\\n\\t<p class=\\"intro\\">\\n\\t\\t<span class=\\"left\\">It supports Markdown,</span>\\n\\t\\t<span class=\\"right\\">and is really fast.</span>\\n\\t</p>\\n\\t<div class=\\"ctas\\">\\n\\t\\t<Sparkles>\\n\\t\\t\\t<Button href=\\"https://github.com/matfantinel/sveltekit-static-blog-template\\">\\n\\t\\t\\t\\t<GitHubIcon slot=\\"icon\\" />\\n\\t\\t\\t\\tSource Code\\n\\t\\t\\t</Button>\\n\\t\\t</Sparkles>\\n\\t\\t<Button color=\\"primary\\" href=\\"https://histoire-sveltekit-static-blog-template.vercel.app/\\">\\n\\t\\t\\t<FeaturesIcon slot=\\"icon\\" />\\n\\t\\t\\tComponents\\n\\t\\t</Button>\\n\\t</div>\\n</section>\\n\\n"],"names":[],"mappings":"AAMmB,iCAAM,CACvB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,CACT,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,iCAAM,CACJ,OAAO,CAAE,IAAI,CAAC,CAAC,CAAC,IAClB,CACF,CACA,mBAAK,CAAC,oBAAO,CACX,UAAU,CAAE,MACd,CACA,mBAAK,CAAC,oBAAO,CACX,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,IAAI,IAAI,CAAC,CAAC,KAAK,CAAC,CACvB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAClB,CACA,mBAAK,CAAC,MAAM,CAAC,mBAAM,CACjB,UAAU,CAAE,IACd,CACA,mBAAK,CAAC,MAAM,CAAC,oBAAO,CAClB,UAAU,CAAE,KACd,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,mBAAK,CAAC,oBAAO,CACX,OAAO,CAAE,IACX,CACF,CACA,mBAAK,CAAC,mBAAM,CACV,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IACT"}`
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<section id="hero" class="svelte-romlur"><h1 class="hello svelte-romlur" data-svelte-h="svelte-6k7elu">This is a SvelteKit Static Blog Template!</h1> <p class="intro svelte-romlur" data-svelte-h="svelte-1yf2tdr"><span class="left svelte-romlur">It supports Markdown,</span> <span class="right svelte-romlur">and is really fast.</span></p> <div class="ctas svelte-romlur">${validate_component(Sparkles, "Sparkles").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          href: "https://github.com/matfantinel/sveltekit-static-blog-template"
        },
        {},
        {
          icon: () => {
            return `${validate_component(Github, "GitHubIcon").$$render($$result, { slot: "icon" }, {}, {})}`;
          },
          default: () => {
            return `Source Code`;
          }
        }
      )}`;
    }
  })} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      color: "primary",
      href: "https://histoire-sveltekit-static-blog-template.vercel.app/"
    },
    {},
    {
      icon: () => {
        return `${validate_component(Features$1, "FeaturesIcon").$$render($$result, { slot: "icon" }, {}, {})}`;
      },
      default: () => {
        return `Components`;
      }
    }
  )}</div></section>`;
});
const css$4 = {
  code: "strong.primary.svelte-8f8x6d{color:var(--color--primary)}strong.secondary.svelte-8f8x6d{color:var(--color--secondary)}",
  map: '{"version":3,"file":"SparklingHighlight.svelte","sources":["SparklingHighlight.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Sparkles from \\"$lib/components/atoms/Sparkles.svelte\\";\\nexport let color = \\"default\\";\\nexport let sparkleColor = \\"default\\";\\n<\/script>\\n<style lang=\\"scss\\">strong.primary {\\n  color: var(--color--primary);\\n}\\nstrong.secondary {\\n  color: var(--color--secondary);\\n}</style>\\n\\n\\n<Sparkles color={sparkleColor}><strong class={color}><slot /></strong></Sparkles>\\n\\n"],"names":[],"mappings":"AAImB,MAAM,sBAAS,CAChC,KAAK,CAAE,IAAI,gBAAgB,CAC7B,CACA,MAAM,wBAAW,CACf,KAAK,CAAE,IAAI,kBAAkB,CAC/B"}'
};
const SparklingHighlight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "default" } = $$props;
  let { sparkleColor = "default" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.sparkleColor === void 0 && $$bindings.sparkleColor && sparkleColor !== void 0)
    $$bindings.sparkleColor(sparkleColor);
  $$result.css.add(css$4);
  return `${validate_component(Sparkles, "Sparkles").$$render($$result, { color: sparkleColor }, {}, {
    default: () => {
      return `<strong class="${escape(null_to_empty(color), true) + " svelte-8f8x6d"}">${slots.default ? slots.default({}) : ``}</strong>`;
    }
  })}`;
});
const css$3 = {
  code: "#about.svelte-1qp99xm.svelte-1qp99xm{position:relative;display:grid;grid-template-columns:500px 250px;align-items:center;justify-content:space-between;padding-bottom:50px}@media(max-width: 767px){#about.svelte-1qp99xm.svelte-1qp99xm{grid-template-columns:1fr;justify-items:center;gap:20px}}#about.svelte-1qp99xm .info.svelte-1qp99xm{display:flex;flex-direction:column;gap:10px}@media(max-width: 767px){#about.svelte-1qp99xm .info h2.svelte-1qp99xm{text-align:center}}@media(max-width: 767px){#about.svelte-1qp99xm .info p.svelte-1qp99xm{text-align:justify}}@media(max-width: 767px){#about.svelte-1qp99xm .info.svelte-1qp99xm{gap:20px}}#about.svelte-1qp99xm .socials.svelte-1qp99xm{display:flex;align-items:center;gap:15px}@media(max-width: 767px){#about.svelte-1qp99xm .socials.svelte-1qp99xm{justify-content:center;margin-bottom:10px}#about.svelte-1qp99xm .socials span.svelte-1qp99xm{display:none}}#about.svelte-1qp99xm .image.svelte-1qp99xm{width:220px;height:220px}",
  map: `{"version":3,"file":"About.svelte","sources":["About.svelte"],"sourcesContent":["<script>\\n\\timport SparklingHighlight from '$lib/components/molecules/SparklingHighlight.svelte';\\n\\timport Socials from '$lib/components/molecules/Socials.svelte';\\n\\timport Image from '../atoms/Image.svelte';\\n<\/script>\\n<style lang=\\"scss\\">#about {\\n  position: relative;\\n  display: grid;\\n  grid-template-columns: 500px 250px;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding-bottom: 50px;\\n}\\n@media (max-width: 767px) {\\n  #about {\\n    grid-template-columns: 1fr;\\n    justify-items: center;\\n    gap: 20px;\\n  }\\n}\\n#about .info {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n}\\n@media (max-width: 767px) {\\n  #about .info h2 {\\n    text-align: center;\\n  }\\n}\\n@media (max-width: 767px) {\\n  #about .info p {\\n    text-align: justify;\\n  }\\n}\\n@media (max-width: 767px) {\\n  #about .info {\\n    gap: 20px;\\n  }\\n}\\n#about .socials {\\n  display: flex;\\n  align-items: center;\\n  gap: 15px;\\n}\\n@media (max-width: 767px) {\\n  #about .socials {\\n    justify-content: center;\\n    margin-bottom: 10px;\\n  }\\n  #about .socials span {\\n    display: none;\\n  }\\n}\\n#about .image {\\n  width: 220px;\\n  height: 220px;\\n}</style>\\n\\n\\n<section id=\\"about\\">\\n\\t<div class=\\"info\\">\\n\\t\\t<h2>\\n\\t\\t\\tThis is a catchy headline that\\n\\t\\t\\t<SparklingHighlight color=\\"secondary\\">sparkles!</SparklingHighlight>\\n\\t\\t</h2>\\n\\t\\t<p>\\n\\t\\t\\tLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit voluptatibus commodi\\n\\t\\t\\tautem provident quam labore, libero beatae praesentium voluptate?\\n\\t\\t</p>\\n\\t\\t<div class=\\"socials\\">\\n\\t\\t\\t<span>Socials:</span>\\n\\t\\t\\t<Socials />\\n\\t\\t</div>\\n\\t</div>\\n\\t<div class=\\"image\\">\\n\\t\\t<Image\\n\\t\\t\\tsrc=\\"/images/sample-image.png\\"\\n\\t\\t\\talt=\\"Sample for the static template\\"\\n\\t\\t/>\\n\\t</div>\\n</section>\\n\\n"],"names":[],"mappings":"AAKmB,oCAAO,CACxB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,KAAK,CAAC,KAAK,CAClC,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,CAC9B,cAAc,CAAE,IAClB,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,oCAAO,CACL,qBAAqB,CAAE,GAAG,CAC1B,aAAa,CAAE,MAAM,CACrB,GAAG,CAAE,IACP,CACF,CACA,qBAAM,CAAC,oBAAM,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IACP,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,qBAAM,CAAC,KAAK,CAAC,iBAAG,CACd,UAAU,CAAE,MACd,CACF,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,qBAAM,CAAC,KAAK,CAAC,gBAAE,CACb,UAAU,CAAE,OACd,CACF,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,qBAAM,CAAC,oBAAM,CACX,GAAG,CAAE,IACP,CACF,CACA,qBAAM,CAAC,uBAAS,CACd,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACP,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,qBAAM,CAAC,uBAAS,CACd,eAAe,CAAE,MAAM,CACvB,aAAa,CAAE,IACjB,CACA,qBAAM,CAAC,QAAQ,CAAC,mBAAK,CACnB,OAAO,CAAE,IACX,CACF,CACA,qBAAM,CAAC,qBAAO,CACZ,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KACV"}`
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<section id="about" class="svelte-1qp99xm"><div class="info svelte-1qp99xm"><h2 class="svelte-1qp99xm">This is a catchy headline that
			${validate_component(SparklingHighlight, "SparklingHighlight").$$render($$result, { color: "secondary" }, {}, {
    default: () => {
      return `sparkles!`;
    }
  })}</h2> <p class="svelte-1qp99xm" data-svelte-h="svelte-e332xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit voluptatibus commodi
			autem provident quam labore, libero beatae praesentium voluptate?</p> <div class="socials svelte-1qp99xm"><span class="svelte-1qp99xm" data-svelte-h="svelte-1o63sv8">Socials:</span> ${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div></div> <div class="image svelte-1qp99xm">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: "/images/sample-image.png",
      alt: "Sample for the static template"
    },
    {},
    {}
  )}</div></section>`;
});
const css$2 = {
  code: ".grid.svelte-1hdv5ie{width:100%;display:grid;grid-template-columns:1fr 1fr;grid-gap:20px}@media(max-width: 767px){.grid.svelte-1hdv5ie{grid-template-columns:1fr}}",
  map: '{"version":3,"file":"RecentPosts.svelte","sources":["RecentPosts.svelte"],"sourcesContent":["<script lang=\\"ts\\">import BlogPostCard from \\"$lib/components/molecules/BlogPostCard.svelte\\";\\nimport ContentSection from \\"$lib/components/organisms/ContentSection.svelte\\";\\nimport Button from \\"$lib/components/atoms/Button.svelte\\";\\nexport let posts;\\n<\/script>\\n<style lang=\\"scss\\">.grid {\\n  width: 100%;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-gap: 20px;\\n}\\n@media (max-width: 767px) {\\n  .grid {\\n    grid-template-columns: 1fr;\\n  }\\n}</style>\\n\\n\\n<ContentSection\\n\\tid=\\"recent-posts\\"\\n\\ttitle=\\"Blog posts\\"\\n\\tdescription=\\"This section shows the 4 most recent blog posts. Check them out for tips on how to get started!\\"\\n\\talign=\\"left\\"\\n>\\n\\t<div slot=\\"button\\">\\n\\t\\t<Button href=\\"/blog\\">View More</Button>\\n\\t</div>\\n\\t<div class=\\"grid\\">\\n\\t\\t{#each posts as post}\\n\\t\\t\\t<BlogPostCard\\n\\t\\t\\t\\tslug={post.slug}\\n\\t\\t\\t\\ttitle={post.title}\\n\\t\\t\\t\\texcerpt={post.excerpt}\\n\\t\\t\\t\\ttags={post.tags}\\n\\t\\t\\t\\treadingTime={post.readingTime}\\n\\t\\t\\t\\tshowImage={false}\\n\\t\\t\\t/>\\n\\t\\t{/each}\\n\\t</div>\\n</ContentSection>\\n\\n"],"names":[],"mappings":"AAKmB,oBAAM,CACvB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,QAAQ,CAAE,IACZ,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,oBAAM,CACJ,qBAAqB,CAAE,GACzB,CACF"}'
};
const RecentPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css$2);
  return `${validate_component(ContentSection, "ContentSection").$$render(
    $$result,
    {
      id: "recent-posts",
      title: "Blog posts",
      description: "This section shows the 4 most recent blog posts. Check them out for tips on how to get started!",
      align: "left"
    },
    {},
    {
      button: () => {
        return `<div slot="button">${validate_component(Button, "Button").$$render($$result, { href: "/blog" }, {}, {
          default: () => {
            return `View More`;
          }
        })}</div>`;
      },
      default: () => {
        return `<div class="grid svelte-1hdv5ie">${each(posts, (post) => {
          return `${validate_component(BlogPostCard, "BlogPostCard").$$render(
            $$result,
            {
              slug: post.slug,
              title: post.title,
              excerpt: post.excerpt,
              tags: post.tags,
              readingTime: post.readingTime,
              showImage: false
            },
            {},
            {}
          )}`;
        })}</div>`;
      }
    }
  )}`;
});
const css$1 = {
  code: ".content.svelte-x9191d{display:flex;flex-direction:column;gap:10px;align-items:flex-start}.title.svelte-x9191d{display:flex;align-items:center;justify-content:space-between;width:100%;font-size:1.2rem;font-family:var(--font--title);font-weight:700}.tags.svelte-x9191d{display:flex;align-items:center;gap:5px;flex-wrap:wrap}.footer.svelte-x9191d{margin-top:20px}.feature-card .image img{object-fit:cover}",
  map: '{"version":3,"file":"FeatureCard.svelte","sources":["FeatureCard.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Card from \\"$lib/components/atoms/Card.svelte\\";\\nimport Tag from \\"$lib/components/atoms/Tag.svelte\\";\\nimport Image from \\"../atoms/Image.svelte\\";\\nexport let name;\\nexport let description;\\nexport let image;\\nexport let tags;\\n<\/script>\\n<style lang=\\"scss\\">.content {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  align-items: flex-start;\\n}\\n\\n.title {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  width: 100%;\\n  font-size: 1.2rem;\\n  font-family: var(--font--title);\\n  font-weight: 700;\\n}\\n\\n.tags {\\n  display: flex;\\n  align-items: center;\\n  gap: 5px;\\n  flex-wrap: wrap;\\n}\\n\\n.footer {\\n  margin-top: 20px;\\n}\\n\\n:global(.feature-card .image img) {\\n  object-fit: cover;\\n}</style>\\n\\n\\n<Card additionalClass=\\"feature-card\\">\\n\\t<div class=\\"image\\" slot=\\"image\\">\\n\\t\\t<Image src={image} alt=\\"Picture describing the {name} feature\\" />\\n\\t</div>\\n\\t<div class=\\"content\\" slot=\\"content\\">\\n\\t\\t<div class=\\"title\\">\\n\\t\\t\\t<span>{name}</span>\\n\\t\\t</div>\\n\\t\\t<p>{description}</p>\\n\\t</div>\\n\\t<div class=\\"footer\\" slot=\\"footer\\">\\n\\t\\t{#if tags && tags.length > 0}\\n\\t\\t\\t<div class=\\"tags\\">\\n\\t\\t\\t\\t{#each tags as tag}\\n\\t\\t\\t\\t\\t<Tag color={tag.color}>{tag.label}</Tag>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n</Card>\\n\\n"],"names":[],"mappings":"AAQmB,sBAAS,CAC1B,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,CACT,WAAW,CAAE,UACf,CAEA,oBAAO,CACL,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,CAC9B,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,IAAI,aAAa,CAAC,CAC/B,WAAW,CAAE,GACf,CAEA,mBAAM,CACJ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GAAG,CACR,SAAS,CAAE,IACb,CAEA,qBAAQ,CACN,UAAU,CAAE,IACd,CAEQ,wBAA0B,CAChC,UAAU,CAAE,KACd"}'
};
const FeatureCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { description } = $$props;
  let { image } = $$props;
  let { tags } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$result.css.add(css$1);
  return `${validate_component(Card, "Card").$$render($$result, { additionalClass: "feature-card" }, {}, {
    footer: () => {
      return `<div class="footer svelte-x9191d" slot="footer">${tags && tags.length > 0 ? `<div class="tags svelte-x9191d">${each(tags, (tag) => {
        return `${validate_component(Tag, "Tag").$$render($$result, { color: tag.color }, {}, {
          default: () => {
            return `${escape(tag.label)}`;
          }
        })}`;
      })}</div>` : ``}</div>`;
    },
    content: () => {
      return `<div class="content svelte-x9191d" slot="content"><div class="title svelte-x9191d"><span>${escape(name)}</span></div> <p>${escape(description)}</p></div>`;
    },
    image: () => {
      return `<div class="image" slot="image">${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: image,
          alt: "Picture describing the " + name + " feature"
        },
        {},
        {}
      )}</div>`;
    }
  })}`;
});
const css = {
  code: ".features-container.svelte-9ei89p{width:100%;display:grid;grid-template-columns:1fr;grid-gap:20px}.three-group-grid.svelte-9ei89p{width:100%;display:grid;grid-template-columns:2fr 1fr;grid-gap:20px}@media(max-width: 1085px){.three-group-grid.svelte-9ei89p{grid-template-columns:1fr 1fr}}@media(max-width: 767px){.three-group-grid.svelte-9ei89p{grid-template-columns:1fr}}@media(min-width: 1086px){.three-group-grid.svelte-9ei89p>:nth-child(3n + 2){grid-row:span 2}}@media(max-width: 1085px){.three-group-grid.svelte-9ei89p>:nth-child(3n + 1){grid-column:span 2}}@media(max-width: 900px){.three-group-grid.svelte-9ei89p>:nth-child(3n + 1){grid-template-columns:1fr;grid-column:unset}}",
  map: '{"version":3,"file":"Features.svelte","sources":["Features.svelte"],"sourcesContent":["<script lang=\\"ts\\">import FeatureCard from \\"$lib/components/molecules/FeatureCard.svelte\\";\\nimport ContentSection from \\"$lib/components/organisms/ContentSection.svelte\\";\\nexport let features;\\n<\/script>\\n<style lang=\\"scss\\">.features-container {\\n  width: 100%;\\n  display: grid;\\n  grid-template-columns: 1fr;\\n  grid-gap: 20px;\\n}\\n\\n.three-group-grid {\\n  width: 100%;\\n  display: grid;\\n  grid-template-columns: 2fr 1fr;\\n  grid-gap: 20px;\\n}\\n\\n@media (max-width: 1085px) {\\n  .three-group-grid {\\n    grid-template-columns: 1fr 1fr;\\n  }\\n}\\n\\n@media (max-width: 767px) {\\n  .three-group-grid {\\n    grid-template-columns: 1fr;\\n  }\\n}\\n\\n@media (min-width: 1086px) {\\n  .three-group-grid > :global(:nth-child(3n + 2)) {\\n    grid-row: span 2;\\n  }\\n}\\n\\n@media (max-width: 1085px) {\\n  .three-group-grid > :global(:nth-child(3n + 1)) {\\n    grid-column: span 2;\\n  }\\n}\\n\\n@media (max-width: 900px) {\\n  .three-group-grid > :global(:nth-child(3n + 1)) {\\n    grid-template-columns: 1fr;\\n    grid-column: unset;\\n  }\\n}</style>\\n\\n\\n<ContentSection\\n\\tid=\\"features\\"\\n\\ttitle=\\"Features\\"\\n\\tdescription=\\"Here are some of the features of this template\\"\\n>\\n\\t<div class=\\"features-container\\">\\n\\t\\t<div class=\\"three-group-grid\\">\\n\\t\\t\\t{#each features as feature}\\n\\t\\t\\t\\t<FeatureCard\\n\\t\\t\\t\\t\\tname={feature.name}\\n\\t\\t\\t\\t\\tdescription={feature.description}\\n\\t\\t\\t\\t\\timage={feature.image}\\n\\t\\t\\t\\t\\ttags={feature.tags}\\n\\t\\t\\t\\t/>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</div>\\n</ContentSection>\\n\\n"],"names":[],"mappings":"AAImB,iCAAoB,CACrC,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAC1B,QAAQ,CAAE,IACZ,CAEA,+BAAkB,CAChB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAC9B,QAAQ,CAAE,IACZ,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,+BAAkB,CAChB,qBAAqB,CAAE,GAAG,CAAC,GAC7B,CACF,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,+BAAkB,CAChB,qBAAqB,CAAE,GACzB,CACF,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,+BAAiB,CAAW,kBAAoB,CAC9C,QAAQ,CAAE,IAAI,CAAC,CACjB,CACF,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,+BAAiB,CAAW,kBAAoB,CAC9C,WAAW,CAAE,IAAI,CAAC,CACpB,CACF,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,+BAAiB,CAAW,kBAAoB,CAC9C,qBAAqB,CAAE,GAAG,CAC1B,WAAW,CAAE,KACf,CACF"}'
};
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { features } = $$props;
  if ($$props.features === void 0 && $$bindings.features && features !== void 0)
    $$bindings.features(features);
  $$result.css.add(css);
  return `${validate_component(ContentSection, "ContentSection").$$render(
    $$result,
    {
      id: "features",
      title: "Features",
      description: "Here are some of the features of this template"
    },
    {},
    {
      default: () => {
        return `<div class="features-container svelte-9ei89p"><div class="three-group-grid svelte-9ei89p">${each(features, (feature) => {
          return `${validate_component(FeatureCard, "FeatureCard").$$render(
            $$result,
            {
              name: feature.name,
              description: feature.description,
              image: feature.image,
              tags: feature.tags
            },
            {},
            {}
          )}`;
        })}</div></div>`;
      }
    }
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { features, posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="container">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${posts && posts.length > 0 ? `${validate_component(RecentPosts, "RecentPosts").$$render($$result, { posts }, {}, {})}` : ``} ${validate_component(Features, "Features").$$render($$result, { features }, {}, {})}</div>`;
});
export {
  Page as default
};
