import { c as create_ssr_component, v as validate_component, e as each, a as add_attribute, b as escape } from "../../../chunks/ssr.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
import { C as ContentSection, B as BlogPostCard, T as Tag } from "../../../chunks/ContentSection.js";
import dateformat from "dateformat";
import { k as keywords, s as siteBaseUrl, t as title } from "../../../chunks/meta.js";
import { I as Image } from "../../../chunks/Image.js";
const css$1 = {
  code: ".simple-grid.svelte-ypk0wh{width:100%;display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:20px}@media(max-width: 1070px){.simple-grid.svelte-ypk0wh{grid-template-columns:1fr 1fr}}@media(max-width: 900px){.simple-grid.svelte-ypk0wh{grid-template-columns:1fr}}",
  map: '{"version":3,"file":"RelatedPosts.svelte","sources":["RelatedPosts.svelte"],"sourcesContent":["<script lang=\\"ts\\">import BlogPostCard from \\"$lib/components/molecules/BlogPostCard.svelte\\";\\nimport ContentSection from \\"$lib/components/organisms/ContentSection.svelte\\";\\nexport let posts;\\n<\/script>\\n<style lang=\\"scss\\">.simple-grid {\\n  width: 100%;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-gap: 20px;\\n}\\n@media (max-width: 1070px) {\\n  .simple-grid {\\n    grid-template-columns: 1fr 1fr;\\n  }\\n}\\n@media (max-width: 900px) {\\n  .simple-grid {\\n    grid-template-columns: 1fr;\\n  }\\n}</style>\\n\\n\\n<ContentSection\\n\\tid=\\"related-posts\\"\\n\\ttitle=\\"Related Posts\\"\\n>\\n\\t<div class=\\"simple-grid\\">\\n\\t\\t{#each posts as post}\\n\\t\\t\\t<BlogPostCard\\n\\t\\t\\t\\tslug={post.slug}\\n\\t\\t\\t\\ttitle={post.title}\\n\\t\\t\\t\\texcerpt={post.excerpt}\\n\\t\\t\\t\\ttags={post.tags}\\n\\t\\t\\t\\treadingTime={post.readingTime}\\n\\t\\t\\t\\tshowImage={false}\\n\\t\\t\\t/>\\n\\t\\t{/each}\\n\\t</div>\\n</ContentSection>\\n\\n"],"names":[],"mappings":"AAImB,0BAAa,CAC9B,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAClC,QAAQ,CAAE,IACZ,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,0BAAa,CACX,qBAAqB,CAAE,GAAG,CAAC,GAC7B,CACF,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,0BAAa,CACX,qBAAqB,CAAE,GACzB,CACF"}'
};
const RelatedPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css$1);
  return `${validate_component(ContentSection, "ContentSection").$$render(
    $$result,
    {
      id: "related-posts",
      title: "Related Posts"
    },
    {},
    {
      default: () => {
        return `<div class="simple-grid svelte-ypk0wh">${each(posts, (post) => {
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
const css = {
  code: ".article-layout.svelte-1hgysft.svelte-1hgysft{--body-background-color:var(--color--post-page-background);background-color:var(--color--post-page-background)}#article-content.svelte-1hgysft.svelte-1hgysft{--main-column-width:65ch;position:relative;padding-top:40px;padding-bottom:80px;padding-right:15px;padding-left:15px;display:flex;flex-direction:column;gap:30px}@media(max-width: 320px){#article-content.svelte-1hgysft.svelte-1hgysft{padding-left:0;padding-right:0}}@media(min-width: 768px){#article-content.svelte-1hgysft.svelte-1hgysft{padding-right:20px;padding-left:20px}}@media(min-width: 901px){#article-content.svelte-1hgysft.svelte-1hgysft{padding-right:30px;padding-left:30px}}#article-content.svelte-1hgysft .header.svelte-1hgysft{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:10px;width:min(var(--main-column-width), 100%);margin:0 auto}#article-content.svelte-1hgysft .header .note.svelte-1hgysft{font-size:90%;color:rgba(var(--color--text-rgb), 0.8)}#article-content.svelte-1hgysft .cover-image.svelte-1hgysft{width:min(var(--main-column-width), 100%);margin:0 auto;max-height:400px;box-shadow:var(--image-shadow);border-radius:6px}#article-content.svelte-1hgysft .cover-image img{max-height:400px;object-fit:cover}#article-content.svelte-1hgysft .content.svelte-1hgysft{display:grid;grid-template-columns:1fr min(var(--main-column-width), 100%) 1fr}#article-content.svelte-1hgysft .content.svelte-1hgysft > *{grid-column:2}#article-content.svelte-1hgysft .content.svelte-1hgysft > .full-bleed{grid-column:1/4;width:100%;max-width:1600px;margin-left:auto;margin-right:auto}#article-content.svelte-1hgysft .tags.svelte-1hgysft{display:flex;align-items:center;justify-content:center;gap:5px;flex-wrap:wrap}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Header from \\"$lib/components/organisms/Header.svelte\\";\\nimport Footer from \\"$lib/components/organisms/Footer.svelte\\";\\nimport Tag from \\"$lib/components/atoms/Tag.svelte\\";\\nimport dateformat from \\"dateformat\\";\\nimport { keywords, siteBaseUrl, title } from \\"$lib/data/meta\\";\\nimport RelatedPosts from \\"$lib/components/organisms/RelatedPosts.svelte\\";\\nimport Image from \\"$lib/components/atoms/Image.svelte\\";\\nexport let data;\\n$:\\n  ({ post } = data);\\nlet metaKeywords = keywords;\\n$: {\\n  if (post?.tags?.length) {\\n    metaKeywords = post.tags.concat(metaKeywords);\\n  }\\n  if (post?.keywords?.length) {\\n    metaKeywords = post.keywords.concat(metaKeywords);\\n  }\\n}\\n<\/script>\\n<style lang=\\"scss\\">.article-layout {\\n  --body-background-color: var(--color--post-page-background);\\n  background-color: var(--color--post-page-background);\\n}\\n\\n#article-content {\\n  --main-column-width: 65ch;\\n  position: relative;\\n  padding-top: 40px;\\n  padding-bottom: 80px;\\n  padding-right: 15px;\\n  padding-left: 15px;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 30px;\\n}\\n\\n@media (max-width: 320px) {\\n  #article-content {\\n    padding-left: 0;\\n    padding-right: 0;\\n  }\\n}\\n\\n@media (min-width: 768px) {\\n  #article-content {\\n    padding-right: 20px;\\n    padding-left: 20px;\\n  }\\n}\\n\\n@media (min-width: 901px) {\\n  #article-content {\\n    padding-right: 30px;\\n    padding-left: 30px;\\n  }\\n}\\n\\n#article-content .header {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  text-align: center;\\n  gap: 10px;\\n  width: min(var(--main-column-width), 100%);\\n  margin: 0 auto;\\n}\\n\\n#article-content .header .note {\\n  font-size: 90%;\\n  color: rgba(var(--color--text-rgb), 0.8);\\n}\\n\\n#article-content .cover-image {\\n  width: min(var(--main-column-width), 100%);\\n  margin: 0 auto;\\n  max-height: 400px;\\n  box-shadow: var(--image-shadow);\\n  border-radius: 6px;\\n}\\n\\n#article-content .cover-image img {\\n  width: 100%;\\n  height: 100%;\\n  max-height: 400px;\\n  object-fit: cover;\\n}\\n\\n#article-content :global(.cover-image img) {\\n  max-height: 400px;\\n  object-fit: cover;\\n}\\n\\n#article-content .content {\\n  display: grid;\\n  grid-template-columns: 1fr min(var(--main-column-width), 100%) 1fr;\\n}\\n\\n#article-content .content :global(> *) {\\n  grid-column: 2;\\n}\\n\\n#article-content .content :global(> .full-bleed) {\\n  grid-column: 1/4;\\n  width: 100%;\\n  max-width: 1600px;\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n#article-content .tags {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 5px;\\n  flex-wrap: wrap;\\n}</style>\\n<svelte:head>\\n\\t{#if post}\\n\\t\\t<meta name=\\"keywords\\" content={metaKeywords.join(', ')} />\\n\\n\\t\\t<meta name=\\"description\\" content={post.excerpt} />\\n\\t\\t<meta property=\\"og:description\\" content={post.excerpt} />\\n\\t\\t<meta name=\\"twitter:description\\" content={post.excerpt} />\\n\\t\\t<link rel=\\"canonical\\" href=\\"{siteBaseUrl}/{post.slug}\\" />\\n\\n\\t\\t<title>{post.title} - {title}</title>\\n\\t\\t<meta property=\\"og:title\\" content=\\"{post.title} - {title}\\" />\\n\\t\\t<meta name=\\"twitter:title\\" content=\\"{post.title} - {title}\\" />\\n\\n\\t\\t{#if post.coverImage}\\n\\t\\t\\t<meta property=\\"og:image\\" content=\\"{siteBaseUrl}{post.coverImage}\\" />\\n\\t\\t\\t<meta name=\\"twitter:image\\" content=\\"{siteBaseUrl}{post.coverImage}\\" />\\n\\t\\t{/if}\\n\\t{/if}\\n</svelte:head>\\n\\n\\n<div class=\\"article-layout\\">\\n\\t<Header showBackground />\\n\\t<main>\\n\\t\\t<article id=\\"article-content\\">\\n\\t\\t\\t<div class=\\"header\\">\\n\\t\\t\\t\\t{#if post}\\n\\t\\t\\t\\t\\t<h1>{post.title}</h1>\\n\\t\\t\\t\\t\\t<div class=\\"note\\">Published on {dateformat(post.date, 'UTC:dd mmmm yyyy')}</div>\\n\\t\\t\\t\\t\\t{#if post.updated}\\n\\t\\t\\t\\t\\t\\t<div class=\\"note\\">Updated on {dateformat(post.updated, 'UTC:dd mmmm yyyy')}</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t{#if post.readingTime}\\n\\t\\t\\t\\t\\t\\t<div class=\\"note\\">{post.readingTime}</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t{#if post.tags?.length}\\n\\t\\t\\t\\t\\t\\t<div class=\\"tags\\">\\n\\t\\t\\t\\t\\t\\t\\t{#each post.tags as tag}\\n\\t\\t\\t\\t\\t\\t\\t\\t<Tag>{tag}</Tag>\\n\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t\\t{#if post && post.coverImage}\\n\\t\\t\\t\\t<div class=\\"cover-image\\">\\n\\t\\t\\t\\t\\t<Image src={post.coverImage} alt={post.title} />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t\\t<div class=\\"content\\">\\n\\t\\t\\t\\t<slot />\\n\\t\\t\\t</div>\\n\\t\\t</article>\\n\\t\\t{#if post.relatedPosts && post.relatedPosts.length > 0}\\n\\t\\t\\t<div class=\\"container\\">\\n\\t\\t\\t\\t<RelatedPosts posts={post.relatedPosts} />\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</main>\\n\\t<Footer />\\n</div>\\n\\n"],"names":[],"mappings":"AAoBmB,6CAAgB,CACjC,uBAAuB,CAAE,kCAAkC,CAC3D,gBAAgB,CAAE,IAAI,6BAA6B,CACrD,CAEA,8CAAiB,CACf,mBAAmB,CAAE,IAAI,CACzB,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,IAAI,CACpB,aAAa,CAAE,IAAI,CACnB,YAAY,CAAE,IAAI,CAClB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IACP,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,8CAAiB,CACf,YAAY,CAAE,CAAC,CACf,aAAa,CAAE,CACjB,CACF,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,8CAAiB,CACf,aAAa,CAAE,IAAI,CACnB,YAAY,CAAE,IAChB,CACF,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,8CAAiB,CACf,aAAa,CAAE,IAAI,CACnB,YAAY,CAAE,IAChB,CACF,CAEA,+BAAgB,CAAC,sBAAQ,CACvB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MAAM,CAClB,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IAAI,IAAI,mBAAmB,CAAC,CAAC,CAAC,IAAI,CAAC,CAC1C,MAAM,CAAE,CAAC,CAAC,IACZ,CAEA,+BAAgB,CAAC,OAAO,CAAC,oBAAM,CAC7B,SAAS,CAAE,GAAG,CACd,KAAK,CAAE,KAAK,IAAI,iBAAiB,CAAC,CAAC,CAAC,GAAG,CACzC,CAEA,+BAAgB,CAAC,2BAAa,CAC5B,KAAK,CAAE,IAAI,IAAI,mBAAmB,CAAC,CAAC,CAAC,IAAI,CAAC,CAC1C,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,IAAI,cAAc,CAAC,CAC/B,aAAa,CAAE,GACjB,CASA,+BAAgB,CAAS,gBAAkB,CACzC,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,KACd,CAEA,+BAAgB,CAAC,uBAAS,CACxB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,IAAI,IAAI,mBAAmB,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,GACjE,CAEA,+BAAgB,CAAC,uBAAQ,CAAS,GAAK,CACrC,WAAW,CAAE,CACf,CAEA,+BAAgB,CAAC,uBAAQ,CAAS,aAAe,CAC/C,WAAW,CAAE,CAAC,CAAC,CAAC,CAChB,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAChB,CAEA,+BAAgB,CAAC,oBAAM,CACrB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,GAAG,CAAE,GAAG,CACR,SAAS,CAAE,IACb"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let post;
  let { data } = $$props;
  let metaKeywords = keywords;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ post } = data);
  {
    {
      if (post?.tags?.length) {
        metaKeywords = post.tags.concat(metaKeywords);
      }
      if (post?.keywords?.length) {
        metaKeywords = post.keywords.concat(metaKeywords);
      }
    }
  }
  return `${$$result.head += `<!-- HEAD_svelte-1ylu8nc_START -->${post ? `<meta name="keywords"${add_attribute("content", metaKeywords.join(", "), 0)}> <meta name="description"${add_attribute("content", post.excerpt, 0)}> <meta property="og:description"${add_attribute("content", post.excerpt, 0)}> <meta name="twitter:description"${add_attribute("content", post.excerpt, 0)}> <link rel="canonical" href="${escape(siteBaseUrl, true) + "/" + escape(post.slug, true)}"> ${$$result.title = `<title>${escape(post.title)} - ${escape(title)}</title>`, ""} <meta property="og:title" content="${escape(post.title, true) + " - " + escape(title, true)}"> <meta name="twitter:title" content="${escape(post.title, true) + " - " + escape(title, true)}"> ${post.coverImage ? `<meta property="og:image" content="${escape(siteBaseUrl, true) + escape(post.coverImage, true)}"> <meta name="twitter:image" content="${escape(siteBaseUrl, true) + escape(post.coverImage, true)}">` : ``}` : ``}<!-- HEAD_svelte-1ylu8nc_END -->`, ""} <div class="article-layout svelte-1hgysft">${validate_component(Header, "Header").$$render($$result, { showBackground: true }, {}, {})} <main><article id="article-content" class="svelte-1hgysft"><div class="header svelte-1hgysft">${post ? `<h1>${escape(post.title)}</h1> <div class="note svelte-1hgysft">Published on ${escape(dateformat(post.date, "UTC:dd mmmm yyyy"))}</div> ${post.updated ? `<div class="note svelte-1hgysft">Updated on ${escape(dateformat(post.updated, "UTC:dd mmmm yyyy"))}</div>` : ``} ${post.readingTime ? `<div class="note svelte-1hgysft">${escape(post.readingTime)}</div>` : ``} ${post.tags?.length ? `<div class="tags svelte-1hgysft">${each(post.tags, (tag) => {
    return `${validate_component(Tag, "Tag").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(tag)}`;
      }
    })}`;
  })}</div>` : ``}` : ``}</div> ${post && post.coverImage ? `<div class="cover-image svelte-1hgysft">${validate_component(Image, "Image").$$render($$result, { src: post.coverImage, alt: post.title }, {}, {})}</div>` : ``} <div class="content svelte-1hgysft">${slots.default ? slots.default({}) : ``}</div></article> ${post.relatedPosts && post.relatedPosts.length > 0 ? `<div class="container">${validate_component(RelatedPosts, "RelatedPosts").$$render($$result, { posts: post.relatedPosts }, {}, {})}</div>` : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
