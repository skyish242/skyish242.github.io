import { c as create_ssr_component, b as escape, h as compute_rest_props, i as spread, j as escape_object, l as compute_slots, v as validate_component, e as each, a as add_attribute } from "./ssr.js";
import { i as is_void, H as HttpRegex } from "./regex.js";
import { I as Image } from "./Image.js";
const css$3 = {
  code: ".tag.svelte-1xh8qlg{display:flex;align-items:center;justify-content:center;gap:5px;padding:5px 15px;border-radius:10px;font-weight:500;font-size:0.85rem;width:fit-content;white-space:nowrap}.tag.primary.svelte-1xh8qlg{background-color:var(--color--primary-tint);color:var(--color--primary)}.tag.secondary.svelte-1xh8qlg{background-color:var(--color--secondary-tint);color:var(--color--secondary)}",
  map: '{"version":3,"file":"Tag.svelte","sources":["Tag.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let color = \\"primary\\";\\n<\/script>\\n<style lang=\\"scss\\">.tag {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 5px;\\n  padding: 5px 15px;\\n  border-radius: 10px;\\n  font-weight: 500;\\n  font-size: 0.85rem;\\n  width: fit-content;\\n  white-space: nowrap;\\n}\\n.tag.primary {\\n  background-color: var(--color--primary-tint);\\n  color: var(--color--primary);\\n}\\n.tag.secondary {\\n  background-color: var(--color--secondary-tint);\\n  color: var(--color--secondary);\\n}</style>\\n\\n\\n<div class=\\"tag {color}\\">\\n\\t<slot />\\n</div>\\n\\n"],"names":[],"mappings":"AAEmB,mBAAK,CACtB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,GAAG,CAAE,GAAG,CACR,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,aAAa,CAAE,IAAI,CACnB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,OAAO,CAClB,KAAK,CAAE,WAAW,CAClB,WAAW,CAAE,MACf,CACA,IAAI,uBAAS,CACX,gBAAgB,CAAE,IAAI,qBAAqB,CAAC,CAC5C,KAAK,CAAE,IAAI,gBAAgB,CAC7B,CACA,IAAI,yBAAW,CACb,gBAAgB,CAAE,IAAI,uBAAuB,CAAC,CAC9C,KAAK,CAAE,IAAI,kBAAkB,CAC/B"}'
};
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "primary" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$3);
  return `<div class="${"tag " + escape(color, true) + " svelte-1xh8qlg"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const css$2 = {
  code: '.card.svelte-1kz16cj.svelte-1kz16cj{background:var(--color--card-background);box-shadow:var(--card-shadow);color:var(--color--text);border-radius:10px;transition:all 0.4s ease;position:relative;overflow:hidden;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;text-decoration:none}.card[href].svelte-1kz16cj.svelte-1kz16cj,.card[onclick].svelte-1kz16cj.svelte-1kz16cj{cursor:pointer}.card[href].svelte-1kz16cj.svelte-1kz16cj:hover,.card[onclick].svelte-1kz16cj.svelte-1kz16cj:hover{box-shadow:var(--card-shadow-hover);transform:scale(1.01)}.body.svelte-1kz16cj.svelte-1kz16cj{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:20px 20px;flex:1 0 50%}.body.svelte-1kz16cj .content.svelte-1kz16cj{display:flex;flex-direction:column;flex:1}.image.svelte-1kz16cj.svelte-1kz16cj{position:relative;flex:1 0 max(50%, 330px);min-height:280px;max-height:350px}.card [slot="image"]{width:100%;height:100%;object-fit:cover;position:absolute}',
  map: '{"version":3,"file":"Card.svelte","sources":["Card.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { HttpRegex } from \\"$lib/utils/regex\\";\\nexport let additionalClass = void 0;\\nexport let href = void 0;\\nconst isExternalLink = !!href && HttpRegex.test(href);\\nexport let target = isExternalLink ? \\"_blank\\" : \\"_self\\";\\nexport let rel = isExternalLink ? \\"noopener noreferrer\\" : void 0;\\n$:\\n  tag = href ? \\"a\\" : \\"article\\";\\n$:\\n  linkProps = {\\n    href,\\n    target,\\n    rel\\n  };\\n<\/script>\\n<style lang=\\"scss\\">.card {\\n  background: var(--color--card-background);\\n  box-shadow: var(--card-shadow);\\n  color: var(--color--text);\\n  border-radius: 10px;\\n  transition: all 0.4s ease;\\n  position: relative;\\n  overflow: hidden;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  text-decoration: none;\\n}\\n.card[href], .card[onclick] {\\n  cursor: pointer;\\n}\\n.card[href]:hover, .card[onclick]:hover {\\n  box-shadow: var(--card-shadow-hover);\\n  transform: scale(1.01);\\n}\\n\\n.body {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  gap: 10px;\\n  padding: 20px 20px;\\n  flex: 1 0 50%;\\n}\\n.body .content {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1;\\n}\\n\\n.image {\\n  position: relative;\\n  flex: 1 0 max(50%, 330px);\\n  min-height: 280px;\\n  max-height: 350px;\\n}\\n\\n:global(.card [slot=\\"image\\"]) {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  position: absolute;\\n}</style>\\n\\n\\n<svelte:element\\n\\tthis={tag}\\n\\tclass=\\"card {additionalClass}\\"\\n\\t{...linkProps}\\n\\tdata-sveltekit-preload-data\\n\\t{...$$restProps}\\n>\\n\\t{#if $$slots.image}\\n\\t\\t<div class=\\"image\\">\\n\\t\\t\\t<slot name=\\"image\\" />\\n\\t\\t</div>\\n\\t{/if}\\n\\t<div class=\\"body\\">\\n\\t\\t<div class=\\"content\\">\\n\\t\\t\\t<slot name=\\"content\\" />\\n\\t\\t</div>\\n\\t\\t{#if $$slots.footer}\\n\\t\\t\\t<div class=\\"footer\\">\\n\\t\\t\\t\\t<slot name=\\"footer\\" />\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n</svelte:element>\\n\\n"],"names":[],"mappings":"AAemB,mCAAM,CACvB,UAAU,CAAE,IAAI,wBAAwB,CAAC,CACzC,UAAU,CAAE,IAAI,aAAa,CAAC,CAC9B,KAAK,CAAE,IAAI,aAAa,CAAC,CACzB,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IAAI,CACzB,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,MAAM,CAChB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,IACnB,CACA,KAAK,CAAC,IAAI,+BAAC,CAAE,KAAK,CAAC,OAAO,+BAAE,CAC1B,MAAM,CAAE,OACV,CACA,KAAK,CAAC,IAAI,+BAAC,MAAM,CAAE,KAAK,CAAC,OAAO,+BAAC,MAAO,CACtC,UAAU,CAAE,IAAI,mBAAmB,CAAC,CACpC,SAAS,CAAE,MAAM,IAAI,CACvB,CAEA,mCAAM,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,aAAa,CAC9B,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,GACZ,CACA,oBAAK,CAAC,uBAAS,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,IAAI,CAAE,CACR,CAEA,oCAAO,CACL,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,GAAG,CAAC,CAAC,KAAK,CAAC,CACzB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,KACd,CAEQ,oBAAsB,CAC5B,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,QAAQ,CAAE,QACZ"}'
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tag;
  let linkProps;
  let $$restProps = compute_rest_props($$props, ["additionalClass", "href", "target", "rel"]);
  let $$slots = compute_slots(slots);
  let { additionalClass = void 0 } = $$props;
  let { href = void 0 } = $$props;
  const isExternalLink = !!href && HttpRegex.test(href);
  let { target = isExternalLink ? "_blank" : "_self" } = $$props;
  let { rel = isExternalLink ? "noopener noreferrer" : void 0 } = $$props;
  if ($$props.additionalClass === void 0 && $$bindings.additionalClass && additionalClass !== void 0)
    $$bindings.additionalClass(additionalClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.rel === void 0 && $$bindings.rel && rel !== void 0)
    $$bindings.rel(rel);
  $$result.css.add(css$2);
  tag = href ? "a" : "article";
  linkProps = { href, target, rel };
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        {
          class: "card " + escape(additionalClass, true)
        },
        escape_object(linkProps),
        { "data-sveltekit-preload-data": true },
        escape_object($$restProps)
      ],
      { classes: "svelte-1kz16cj" }
    )}>${is_void(tag$1) ? "" : `${$$slots.image ? `<div class="image svelte-1kz16cj">${slots.image ? slots.image({}) : ``}</div>` : ``} <div class="body svelte-1kz16cj"><div class="content svelte-1kz16cj">${slots.content ? slots.content({}) : ``}</div> ${$$slots.footer ? `<div class="footer">${slots.footer ? slots.footer({}) : ``}</div>` : ``}</div>`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
const css$1 = {
  code: ".content.svelte-1i7t6gt{display:flex;flex-direction:column;gap:0px;align-items:flex-start}.title.svelte-1i7t6gt{display:flex;align-items:center;justify-content:space-between;width:100%;font-size:1.2rem;font-family:var(--font--title);font-weight:700}.tags.svelte-1i7t6gt{display:flex;align-items:center;gap:5px;flex-wrap:wrap}.note.svelte-1i7t6gt{font-size:0.8rem;color:rgba(var(--color--text-rgb), 0.8)}.text.svelte-1i7t6gt{margin-top:5px;font-size:0.9rem;text-align:justify}.footer.svelte-1i7t6gt{margin-top:20px}.blog-post-card .image img{object-fit:cover}.blog-post-card.no-image > .image{display:none}",
  map: `{"version":3,"file":"BlogPostCard.svelte","sources":["BlogPostCard.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Card from \\"$lib/components/atoms/Card.svelte\\";\\nimport Tag from \\"$lib/components/atoms/Tag.svelte\\";\\nimport Image from \\"../atoms/Image.svelte\\";\\nexport let title;\\nexport let coverImage = void 0;\\nexport let excerpt;\\nexport let slug;\\nexport let tags;\\nexport let readingTime = void 0;\\nexport let showImage = true;\\n<\/script>\\n<style lang=\\"scss\\">.content {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 0px;\\n  align-items: flex-start;\\n}\\n\\n.title {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  width: 100%;\\n  font-size: 1.2rem;\\n  font-family: var(--font--title);\\n  font-weight: 700;\\n}\\n\\n.tags {\\n  display: flex;\\n  align-items: center;\\n  gap: 5px;\\n  flex-wrap: wrap;\\n}\\n\\n.note {\\n  font-size: 0.8rem;\\n  color: rgba(var(--color--text-rgb), 0.8);\\n}\\n\\n.text {\\n  margin-top: 5px;\\n  font-size: 0.9rem;\\n  text-align: justify;\\n}\\n\\n.footer {\\n  margin-top: 20px;\\n}\\n\\n:global(.blog-post-card .image img) {\\n  object-fit: cover;\\n}\\n\\n:global(.blog-post-card.no-image > .image) {\\n  display: none;\\n}</style>\\n\\n\\n<Card\\n\\thref=\\"/{slug}\\"\\n\\ttarget=\\"_self\\"\\n\\tadditionalClass=\\"blog-post-card {!showImage || !coverImage ? 'no-image' : ''}\\"\\n>\\n\\t<div class=\\"image\\" slot=\\"image\\">\\n\\t\\t{#if coverImage}\\n\\t\\t\\t<Image src={coverImage} alt=\\"Cover image of this blog post\\" />\\n\\t\\t{/if}\\n\\t</div>\\n\\t<div class=\\"content\\" slot=\\"content\\">\\n\\t\\t<p class=\\"title\\">\\n\\t\\t\\t{title}\\n\\t\\t</p>\\n\\t\\t{#if readingTime}\\n\\t\\t\\t<div class=\\"note\\">{readingTime}</div>\\n\\t\\t{/if}\\n\\t\\t{#if excerpt}\\n\\t\\t\\t<p class=\\"text\\">\\n\\t\\t\\t\\t{excerpt}\\n\\t\\t\\t</p>\\n\\t\\t{/if}\\n\\t</div>\\n\\t<div class=\\"footer\\" slot=\\"footer\\">\\n\\t\\t{#if tags?.length}\\n\\t\\t\\t<div class=\\"tags\\">\\n\\t\\t\\t\\t{#each tags.slice(0, 2) as tag}\\n\\t\\t\\t\\t\\t<Tag>{tag}</Tag>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n</Card>\\n\\n"],"names":[],"mappings":"AAWmB,uBAAS,CAC1B,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,GAAG,CACR,WAAW,CAAE,UACf,CAEA,qBAAO,CACL,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,CAC9B,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,IAAI,aAAa,CAAC,CAC/B,WAAW,CAAE,GACf,CAEA,oBAAM,CACJ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GAAG,CACR,SAAS,CAAE,IACb,CAEA,oBAAM,CACJ,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,KAAK,IAAI,iBAAiB,CAAC,CAAC,CAAC,GAAG,CACzC,CAEA,oBAAM,CACJ,UAAU,CAAE,GAAG,CACf,SAAS,CAAE,MAAM,CACjB,UAAU,CAAE,OACd,CAEA,sBAAQ,CACN,UAAU,CAAE,IACd,CAEQ,0BAA4B,CAClC,UAAU,CAAE,KACd,CAEQ,iCAAmC,CACzC,OAAO,CAAE,IACX"}`
};
const BlogPostCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { coverImage = void 0 } = $$props;
  let { excerpt } = $$props;
  let { slug } = $$props;
  let { tags } = $$props;
  let { readingTime = void 0 } = $$props;
  let { showImage = true } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.coverImage === void 0 && $$bindings.coverImage && coverImage !== void 0)
    $$bindings.coverImage(coverImage);
  if ($$props.excerpt === void 0 && $$bindings.excerpt && excerpt !== void 0)
    $$bindings.excerpt(excerpt);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  if ($$props.readingTime === void 0 && $$bindings.readingTime && readingTime !== void 0)
    $$bindings.readingTime(readingTime);
  if ($$props.showImage === void 0 && $$bindings.showImage && showImage !== void 0)
    $$bindings.showImage(showImage);
  $$result.css.add(css$1);
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      href: "/" + slug,
      target: "_self",
      additionalClass: "blog-post-card " + (!showImage || !coverImage ? "no-image" : "")
    },
    {},
    {
      footer: () => {
        return `<div class="footer svelte-1i7t6gt" slot="footer">${tags?.length ? `<div class="tags svelte-1i7t6gt">${each(tags.slice(0, 2), (tag) => {
          return `${validate_component(Tag, "Tag").$$render($$result, {}, {}, {
            default: () => {
              return `${escape(tag)}`;
            }
          })}`;
        })}</div>` : ``}</div>`;
      },
      content: () => {
        return `<div class="content svelte-1i7t6gt" slot="content"><p class="title svelte-1i7t6gt">${escape(title)}</p> ${readingTime ? `<div class="note svelte-1i7t6gt">${escape(readingTime)}</div>` : ``} ${excerpt ? `<p class="text svelte-1i7t6gt">${escape(excerpt)}</p>` : ``}</div>`;
      },
      image: () => {
        return `<div class="image" slot="image">${coverImage ? `${validate_component(Image, "Image").$$render(
          $$result,
          {
            src: coverImage,
            alt: "Cover image of this blog post"
          },
          {},
          {}
        )}` : ``}</div>`;
      }
    }
  )}`;
});
const css = {
  code: ".content-section.svelte-emrvls.svelte-emrvls{display:flex;align-items:center;justify-content:space-between;gap:40px;padding:50px 0}.content-section.svelte-emrvls .title-area.svelte-emrvls{flex:2;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:15px}.content-section.svelte-emrvls .title-area .text.svelte-emrvls{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px}.content-section.svelte-emrvls .content-area.svelte-emrvls{flex:5;display:grid;place-items:center}@media(min-width: 901px){.content-section.left.svelte-emrvls .title-area.svelte-emrvls{order:1}.content-section.left.svelte-emrvls .content-area.svelte-emrvls{order:2}.content-section.right.svelte-emrvls .title-area.svelte-emrvls{order:2}.content-section.right.svelte-emrvls .content-area.svelte-emrvls{order:1}.content-section.top.svelte-emrvls.svelte-emrvls{flex-direction:column}.content-section.top.svelte-emrvls .title-area.svelte-emrvls{order:1;max-width:600px}.content-section.top.svelte-emrvls .content-area.svelte-emrvls{order:2;width:100%}}@media(max-width: 900px){.content-section.svelte-emrvls.svelte-emrvls{flex-direction:column}}",
  map: `{"version":3,"file":"ContentSection.svelte","sources":["ContentSection.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let id = void 0;\\nexport let title = void 0;\\nexport let description = void 0;\\nexport let align = \\"top\\";\\n<\/script>\\n<style lang=\\"scss\\">.content-section {\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  gap: 40px;\\n  padding: 50px 0;\\n}\\n.content-section .title-area {\\n  flex: 2;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  gap: 15px;\\n}\\n.content-section .title-area .text {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 5px;\\n}\\n.content-section .content-area {\\n  flex: 5;\\n  display: grid;\\n  place-items: center;\\n}\\n@media (min-width: 901px) {\\n  .content-section.left .title-area {\\n    order: 1;\\n  }\\n  .content-section.left .content-area {\\n    order: 2;\\n  }\\n  .content-section.right .title-area {\\n    order: 2;\\n  }\\n  .content-section.right .content-area {\\n    order: 1;\\n  }\\n  .content-section.top {\\n    flex-direction: column;\\n  }\\n  .content-section.top .title-area {\\n    order: 1;\\n    max-width: 600px;\\n  }\\n  .content-section.top .content-area {\\n    order: 2;\\n    width: 100%;\\n  }\\n}\\n@media (max-width: 900px) {\\n  .content-section {\\n    flex-direction: column;\\n  }\\n}</style>\\n\\n\\n<section {id} class=\\"content-section {align}\\">\\n\\t<div class=\\"title-area\\">\\n\\t\\t{#if title || description}\\n\\t\\t\\t<div class=\\"text\\">\\n\\t\\t\\t\\t{#if title}\\n\\t\\t\\t\\t\\t<h2>\\n\\t\\t\\t\\t\\t\\t{title}\\n\\t\\t\\t\\t\\t</h2>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t{#if description}\\n\\t\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\t\\t{description}\\n\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t\\t{#if $$slots['button']}\\n\\t\\t\\t<div class=\\"button\\">\\n\\t\\t\\t\\t<slot name=\\"button\\" />\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n\\t<div class=\\"content-area\\">\\n\\t\\t<slot />\\n\\t</div>\\n</section>\\n\\n"],"names":[],"mappings":"AAKmB,4CAAiB,CAClC,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,CAC9B,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,8BAAgB,CAAC,yBAAY,CAC3B,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAAM,CAClB,GAAG,CAAE,IACP,CACA,8BAAgB,CAAC,WAAW,CAAC,mBAAM,CACjC,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,GACP,CACA,8BAAgB,CAAC,2BAAc,CAC7B,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACf,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,gBAAgB,mBAAK,CAAC,yBAAY,CAChC,KAAK,CAAE,CACT,CACA,gBAAgB,mBAAK,CAAC,2BAAc,CAClC,KAAK,CAAE,CACT,CACA,gBAAgB,oBAAM,CAAC,yBAAY,CACjC,KAAK,CAAE,CACT,CACA,gBAAgB,oBAAM,CAAC,2BAAc,CACnC,KAAK,CAAE,CACT,CACA,gBAAgB,gCAAK,CACnB,cAAc,CAAE,MAClB,CACA,gBAAgB,kBAAI,CAAC,yBAAY,CAC/B,KAAK,CAAE,CAAC,CACR,SAAS,CAAE,KACb,CACA,gBAAgB,kBAAI,CAAC,2BAAc,CACjC,KAAK,CAAE,CAAC,CACR,KAAK,CAAE,IACT,CACF,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,4CAAiB,CACf,cAAc,CAAE,MAClB,CACF"}`
};
const ContentSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { id = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { description = void 0 } = $$props;
  let { align = "top" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  $$result.css.add(css);
  return `<section${add_attribute("id", id, 0)} class="${"content-section " + escape(align, true) + " svelte-emrvls"}"><div class="title-area svelte-emrvls">${title || description ? `<div class="text svelte-emrvls">${title ? `<h2>${escape(title)}</h2>` : ``} ${description ? `<p>${escape(description)}</p>` : ``}</div>` : ``} ${$$slots["button"] ? `<div class="button">${slots.button ? slots.button({}) : ``}</div>` : ``}</div> <div class="content-area svelte-emrvls">${slots.default ? slots.default({}) : ``}</div></section>`;
});
export {
  BlogPostCard as B,
  ContentSection as C,
  Tag as T,
  Card as a
};
