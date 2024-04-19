import { c as create_ssr_component, v as validate_component, e as each } from "../../../../chunks/ssr.js";
import { C as ContentSection, B as BlogPostCard } from "../../../../chunks/ContentSection.js";
const css = {
  code: ".grid.svelte-1mrrl9u{width:100%;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;grid-gap:20px}@media(max-width: 900px){.grid.svelte-1mrrl9u{grid-template-columns:1fr}}@media(min-width: 901px){.grid.svelte-1mrrl9u>:nth-child(6n + 1){grid-column:span 6}.grid.svelte-1mrrl9u>:nth-child(6n + 2){grid-column:span 3}.grid.svelte-1mrrl9u>:nth-child(6n + 3){grid-column:span 3}.grid.svelte-1mrrl9u>:nth-child(6n + 4),.grid.svelte-1mrrl9u :nth-child(6n + 5),.grid.svelte-1mrrl9u :nth-child(6n + 6){grid-column:span 2}}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import BlogPostCard from \\"$lib/components/molecules/BlogPostCard.svelte\\";\\nimport ContentSection from \\"$lib/components/organisms/ContentSection.svelte\\";\\nexport let data;\\nlet { posts } = data;\\n<\/script>\\n<style lang=\\"scss\\">.grid {\\n  width: 100%;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\\n  grid-gap: 20px;\\n}\\n@media (max-width: 900px) {\\n  .grid {\\n    grid-template-columns: 1fr;\\n  }\\n}\\n@media (min-width: 901px) {\\n  .grid > :global(:nth-child(6n + 1)) {\\n    grid-column: span 6;\\n  }\\n  .grid > :global(:nth-child(6n + 2)) {\\n    grid-column: span 3;\\n  }\\n  .grid > :global(:nth-child(6n + 3)) {\\n    grid-column: span 3;\\n  }\\n  .grid > :global(:nth-child(6n + 4)),\\n  .grid :global(:nth-child(6n + 5)),\\n  .grid :global(:nth-child(6n + 6)) {\\n    grid-column: span 2;\\n  }\\n}</style>\\n\\n\\n<div class=\\"container\\">\\n\\t<ContentSection title=\\"All Blog Posts\\">\\n\\t\\t<div class=\\"grid\\">\\n\\t\\t\\t{#each posts as post}\\n\\t\\t\\t\\t<BlogPostCard\\n\\t\\t\\t\\t\\ttitle={post.title}\\n\\t\\t\\t\\t\\tcoverImage={post.coverImage}\\n\\t\\t\\t\\t\\texcerpt={post.excerpt}\\n\\t\\t\\t\\t\\treadingTime={post.readingTime}\\n\\t\\t\\t\\t\\tslug={post.slug}\\n\\t\\t\\t\\t\\ttags={post.tags}\\n\\t\\t\\t\\t/>\\n\\t\\t\\t{/each}\\n\\t\\t</div>\\n\\t</ContentSection>\\n</div>\\n\\n"],"names":[],"mappings":"AAKmB,oBAAM,CACvB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAC9C,QAAQ,CAAE,IACZ,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,oBAAM,CACJ,qBAAqB,CAAE,GACzB,CACF,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,oBAAK,CAAW,kBAAoB,CAClC,WAAW,CAAE,IAAI,CAAC,CACpB,CACA,oBAAK,CAAW,kBAAoB,CAClC,WAAW,CAAE,IAAI,CAAC,CACpB,CACA,oBAAK,CAAW,kBAAoB,CAClC,WAAW,CAAE,IAAI,CAAC,CACpB,CACA,oBAAK,CAAW,kBAAmB,CACnC,oBAAK,CAAS,kBAAmB,CACjC,oBAAK,CAAS,kBAAoB,CAChC,WAAW,CAAE,IAAI,CAAC,CACpB,CACF"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="container">${validate_component(ContentSection, "ContentSection").$$render($$result, { title: "All Blog Posts" }, {}, {
    default: () => {
      return `<div class="grid svelte-1mrrl9u">${each(posts, (post) => {
        return `${validate_component(BlogPostCard, "BlogPostCard").$$render(
          $$result,
          {
            title: post.title,
            coverImage: post.coverImage,
            excerpt: post.excerpt,
            readingTime: post.readingTime,
            slug: post.slug,
            tags: post.tags
          },
          {},
          {}
        )}`;
      })}</div>`;
    }
  })}</div>`;
});
export {
  Page as default
};
