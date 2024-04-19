import { c as create_ssr_component, b as escape, v as validate_component } from "./ssr.js";
import { C as CodeBlock } from "./CodeBlock.js";
import { I as Image } from "./Image.js";
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 7L12 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 17.01L12.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const Check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 12.5L10 15.5L17 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 11.5V16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 7.51L12.01 7.49889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const css = {
  code: ".callout-block.svelte-sxx0n0.svelte-sxx0n0{--bg-color:var(--color--page-background);--accent-color:transparent;--text-color:var(--color--text);margin:40px 0 30px;padding:25px 25px;border-top-right-radius:10px;border-bottom-right-radius:10px;background:var(--bg-color);color:var(--text-color);border-left:4px solid var(--accent-color);position:relative}.callout-block.svelte-sxx0n0 .icon-wrapper.svelte-sxx0n0{position:absolute;width:50px;height:50px;top:0;left:0;transform:translate(calc(-50% - 1.5px), -50%);background:var(--color--post-page-background);padding:8px;border-radius:50%;fill:var(--accent-color);color:var(--accent-color)}.callout-block.info.svelte-sxx0n0.svelte-sxx0n0{--bg-color:var(--color--callout-background--info);--accent-color:var(--color--callout-accent--info)}.callout-block.warning.svelte-sxx0n0.svelte-sxx0n0{--bg-color:var(--color--callout-background--warning);--accent-color:var(--color--callout-accent--warning)}.callout-block.error.svelte-sxx0n0.svelte-sxx0n0{--bg-color:var(--color--callout-background--error);--accent-color:var(--color--callout-accent--error)}.callout-block.success.svelte-sxx0n0.svelte-sxx0n0{--bg-color:var(--color--callout-background--success);--accent-color:var(--color--callout-accent--success)}",
  map: `{"version":3,"file":"Callout.svelte","sources":["Callout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Alert from \\"$lib/icons/alert.svelte\\";\\nimport Check from \\"$lib/icons/check.svelte\\";\\nimport Info from \\"$lib/icons/info.svelte\\";\\nexport let type = void 0;\\n<\/script>\\n<style lang=\\"scss\\">.callout-block {\\n  --bg-color: var(--color--page-background);\\n  --accent-color: transparent;\\n  --text-color: var(--color--text);\\n  margin: 40px 0 30px;\\n  padding: 25px 25px;\\n  border-top-right-radius: 10px;\\n  border-bottom-right-radius: 10px;\\n  background: var(--bg-color);\\n  color: var(--text-color);\\n  border-left: 4px solid var(--accent-color);\\n  position: relative;\\n}\\n.callout-block .icon-wrapper {\\n  position: absolute;\\n  width: 50px;\\n  height: 50px;\\n  top: 0;\\n  left: 0;\\n  transform: translate(calc(-50% - 1.5px), -50%);\\n  background: var(--color--post-page-background);\\n  padding: 8px;\\n  border-radius: 50%;\\n  fill: var(--accent-color);\\n  color: var(--accent-color);\\n}\\n.callout-block.info {\\n  --bg-color: var(--color--callout-background--info);\\n  --accent-color: var(--color--callout-accent--info);\\n}\\n.callout-block.warning {\\n  --bg-color: var(--color--callout-background--warning);\\n  --accent-color: var(--color--callout-accent--warning);\\n}\\n.callout-block.error {\\n  --bg-color: var(--color--callout-background--error);\\n  --accent-color: var(--color--callout-accent--error);\\n}\\n.callout-block.success {\\n  --bg-color: var(--color--callout-background--success);\\n  --accent-color: var(--color--callout-accent--success);\\n}</style>\\n\\n\\n<div class=\\"callout-block {type ?? ''}\\">\\n\\t{#if type}\\n\\t\\t<div class=\\"icon-wrapper\\">\\n\\t\\t\\t{#if type == 'info'}\\n\\t\\t\\t\\t<Info />\\n\\t\\t\\t{:else if type == 'warning' || type == 'error'}\\n\\t\\t\\t\\t<Alert />\\n\\t\\t\\t{:else if type == 'success'}\\n\\t\\t\\t\\t<Check />\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t{/if}\\n\\t<slot />\\n</div>\\n\\n"],"names":[],"mappings":"AAKmB,0CAAe,CAChC,UAAU,CAAE,6BAA6B,CACzC,cAAc,CAAE,WAAW,CAC3B,YAAY,CAAE,kBAAkB,CAChC,MAAM,CAAE,IAAI,CAAC,CAAC,CAAC,IAAI,CACnB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,uBAAuB,CAAE,IAAI,CAC7B,0BAA0B,CAAE,IAAI,CAChC,UAAU,CAAE,IAAI,UAAU,CAAC,CAC3B,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,cAAc,CAAC,CAC1C,QAAQ,CAAE,QACZ,CACA,4BAAc,CAAC,2BAAc,CAC3B,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,SAAS,CAAE,UAAU,KAAK,IAAI,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAC9C,UAAU,CAAE,IAAI,6BAA6B,CAAC,CAC9C,OAAO,CAAE,GAAG,CACZ,aAAa,CAAE,GAAG,CAClB,IAAI,CAAE,IAAI,cAAc,CAAC,CACzB,KAAK,CAAE,IAAI,cAAc,CAC3B,CACA,cAAc,iCAAM,CAClB,UAAU,CAAE,sCAAsC,CAClD,cAAc,CAAE,kCAClB,CACA,cAAc,oCAAS,CACrB,UAAU,CAAE,yCAAyC,CACrD,cAAc,CAAE,qCAClB,CACA,cAAc,kCAAO,CACnB,UAAU,CAAE,uCAAuC,CACnD,cAAc,CAAE,mCAClB,CACA,cAAc,oCAAS,CACrB,UAAU,CAAE,yCAAyC,CACrD,cAAc,CAAE,qCAClB"}`
};
const Callout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = void 0 } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css);
  return `<div class="${"callout-block " + escape(type ?? "", true) + " svelte-sxx0n0"}">${type ? `<div class="icon-wrapper svelte-sxx0n0">${type == "info" ? `${validate_component(Info, "Info").$$render($$result, {}, {}, {})}` : `${type == "warning" || type == "error" ? `${validate_component(Alert, "Alert").$$render($$result, {}, {}, {})}` : `${type == "success" ? `${validate_component(Check, "Check").$$render($$result, {}, {}, {})}` : ``}`}`}</div>` : ``} ${slots.default ? slots.default({}) : ``}</div>`;
});
const metadata = {
  "title": "How Blog Posts Work",
  "slug": "blog-posts",
  "coverImage": "/images/posts/blog-posts.jpg",
  "date": "2023-04-22T21:55:15.361Z",
  "excerpt": "How to manage existing blog posts and create new ones",
  "tags": ["Documentation"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-1xwgc8f">All blog posts are located inside the <code>src/routes/(blog-article)</code> folder. Each folder inside it represents a blog post, and each folder has a <code>+page.md</code> file, which is the file that contains the post’s content.</p> <p data-svelte-h="svelte-w9sf9o">This way, the URL for each blog post is generated with the folder’s name. For example, the folder <code>src/routes/(blog-article)/how-blog-posts-work</code> will generate the URL <code>https://mysite.com/how-blog-posts-work</code>.</p> <p data-svelte-h="svelte-c4i0f2">All posts are Markdown files, which means you can use the <a href="https://www.markdownguide.org/basic-syntax" rel="nofollow">Markdown syntax</a> in them, and it will work out of the box. However, since this projects uses <a href="https://mdsvex.pngwn.io/" rel="nofollow">MDsveX</a> to parse Markdown, you can also use Svelte components inside them! This means that the components used in other pages can also be used in blog posts.</p> ${validate_component(Callout, "Callout").$$render($$result, { type: "info" }, {}, {
    default: () => {
      return `This is a Svelte component inside a Markdown file!`;
    }
  })} <h2 id="processing" data-svelte-h="svelte-1z0x6vg"><a class="heading-link" title="Permalink" aria-hidden="true" href="#processing"><span>#</span></a>Processing</h2> <p data-svelte-h="svelte-1kf8rlo">Besides the blog post page itself, the blog posts can be displayed in other places, such as the <code>/blog</code> page, which lists all blog posts, and the <code>&lt;RecentPosts&gt;</code> component, used in the home page.</p> <p data-svelte-h="svelte-1eocxho">To be able to do that, posts are processed in the <code>src/lib/data/blog-posts/index.ts</code> file. That file imports the blog post files and processes them, so we’re able to use some of the post’s metadata to list them. For example, we get the post’s title, cover image, and calculate the reading time based on its content, so that information is displayed in the blog post cards in the <code>/blog</code> page.</p> <p data-svelte-h="svelte-2zodqd">There is also some basic logic to get related posts based on a post’s tags. The logic should be straightforward enough to modify it to your needs.</p> <h2 id="creating-a-new-post" data-svelte-h="svelte-m25oyt"><a class="heading-link" title="Permalink" aria-hidden="true" href="#creating-a-new-post"><span>#</span></a>Creating a new post</h2> <p data-svelte-h="svelte-v0p6s8">To create a new post, create a new folder inside the <code>src/routes/(blog-article)</code> folder, and inside it, create a <code>+page.md</code> file. The folder name will be used as the post’s URL slug, so make sure it’s a valid URL slug.</p> <p data-svelte-h="svelte-1gmm44u">Inside the <code>+page.md</code> file, you must start with the front matter, which is a YAML-like syntax that is used to define metadata for the post. The front matter must be the first thing in the file, and must be separated from the rest of the content by three dashes (<code>---</code>). An example of a front matter is:</p> ${validate_component(CodeBlock, "CodeBlock").$$render($$result, { lang: "markdown" }, {}, {
    default: () => {
      return `<pre class="language-md"><!-- HTML_TAG_START -->${`<code class="language-md"><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml">slug: my-new-blog-post
title: My New Blog Post
date: 2023-04-22T20:45:25.350Z
excerpt: A short description of the post
coverImage: /images/posts/cover-image.jpg
tags:
  - Example</span>
<span class="token punctuation">---</span></span></code>`}<!-- HTML_TAG_END --></pre>`;
    }
  })} <h2 id="managing-blog-posts" data-svelte-h="svelte-1dbrz46"><a class="heading-link" title="Permalink" aria-hidden="true" href="#managing-blog-posts"><span>#</span></a>Managing blog posts</h2> <p data-svelte-h="svelte-1sthwsb">I highly recommend the <a href="https://frontmatter.codes/" rel="nofollow">Front Matter VS Code extension</a> to manage blog posts. It gives you a nice CMS-like UI to manage the front matter of all blog posts, as well as a preview of their content. It is, of course, optional, and you can manage everything directly in the Markdown files if you prefer.</p> ${validate_component(Image, "Image").$$render(
    $$result,
    {
      fullBleed: true,
      src: "/images/posts/frontmatter-preview-dashboard.png",
      alt: "Screenshot of the Front Matter VS Code extension, showing the dashboard with all posts"
    },
    {},
    {}
  )} ${validate_component(Image, "Image").$$render(
    $$result,
    {
      fullBleed: true,
      src: "/images/posts/frontmatter-preview-edit.png",
      alt: "Screenshot of the Front Matter VS Code extension, showing the post editing UI"
    },
    {},
    {}
  )} <h2 id="rss" data-svelte-h="svelte-i1135l"><a class="heading-link" title="Permalink" aria-hidden="true" href="#rss"><span>#</span></a>RSS</h2> <p data-svelte-h="svelte-m96fk4">This template automatically generates a RSS feed of your blog posts. It is generated in the <code>src/routes/rss.xml/+server.ts</code> file, and it is available at the <code>/rss.xml</code> URL.</p>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  Page as P,
  __vite_glob_0_0 as _,
  metadata as m
};
