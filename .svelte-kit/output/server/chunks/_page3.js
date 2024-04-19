import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { C as CodeBlock } from "./CodeBlock.js";
const metadata = {
  "slug": "project-structure",
  "title": "Project Structure",
  "date": "2023-04-22T21:55:21.800Z",
  "excerpt": "How code and structure are organized.",
  "coverImage": "/images/posts/project-structure.jpg",
  "tags": ["Documentation"]
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-ruhiik">This project follows the basic <a href="https://kit.svelte.dev/docs/project-structure" rel="nofollow">SvelteKit structure</a>, with some added conventions to make customization a post-management easier.</p> <h2 id="components" data-svelte-h="svelte-14f6cgr"><a class="heading-link" title="Permalink" aria-hidden="true" href="#components"><span>#</span></a>Components</h2> <p data-svelte-h="svelte-9r0xzf">The components are organized following the <a href="https://medium.com/@WeAreMobile1st/atomic-design-getting-started-916bc81bad0e" rel="nofollow">Atomic Design</a> principles, albeit somewhat simplified. Components are in the <code>src/lib/components</code> folder, and are organized in the following way:</p> <h3 id="atoms" data-svelte-h="svelte-iballz"><a class="heading-link" title="Permalink" aria-hidden="true" href="#atoms"><span>#</span></a>Atoms</h3> <p data-svelte-h="svelte-1l1z0dm">Atoms are the most basic components, which can be seen as building blocks for other components. They’re small and self-contained, and do only one thing. Examples of atoms are buttons, inputs, and tags.</p> <h3 id="molecules" data-svelte-h="svelte-illvc4"><a class="heading-link" title="Permalink" aria-hidden="true" href="#molecules"><span>#</span></a>Molecules</h3> <p data-svelte-h="svelte-9ljnh6">Molecules are groups of atoms that work together to form a more complex component. Examples of molecules are cards, groups of links, or an alert callout.</p> <h3 id="organisms" data-svelte-h="svelte-1ddu7xk"><a class="heading-link" title="Permalink" aria-hidden="true" href="#organisms"><span>#</span></a>Organisms</h3> <p data-svelte-h="svelte-nqh8z0">Organisms, in this project, are code blocks that represent a section of a page, such as the header, footer and hero section. They can be used directly in a page as a sort of building block, so the page’s code can be as simple as this:</p> ${validate_component(CodeBlock, "CodeBlock").$$render($$result, { lang: "html", filename: "+page.svelte" }, {}, {
    default: () => {
      return `<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Header</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Hero</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>About</span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Footer</span> <span class="token punctuation">/></span></span></code>`}<!-- HTML_TAG_END --></pre>`;
    }
  })} <h2 id="component-gallery" data-svelte-h="svelte-1nc8qyy"><a class="heading-link" title="Permalink" aria-hidden="true" href="#component-gallery"><span>#</span></a>Component Gallery</h2> <p data-svelte-h="svelte-15d0xdo">This project uses <a href="https://histoire.dev" rel="nofollow">Histoire</a> to be able to see and develop components in isolation. To open it, run <code>npm run story:dev</code>. This way you can customize and build new components with placeholder content and without worrying about where to put them in a page.</p> <h2 id="pages" data-svelte-h="svelte-mazl1x"><a class="heading-link" title="Permalink" aria-hidden="true" href="#pages"><span>#</span></a>Pages</h2> <p data-svelte-h="svelte-1j0keeu">Pages obey the default SvelteKit structure, but can be summarized as follows:</p> <ul data-svelte-h="svelte-t6j5s3"><li>There are two different file types: the pages (<code>+page.svelte</code>) and the layouts (<code>+layout.svelte</code>). Layouts are a way to reuse the same structure between different pages without having to duplicate code;</li> <li>There are two different page layouts in this site: the “Waves” layout, which all pages inside the <code>(waves)</code> folder use, and the “Blog Article” layout, which all pages inside the <code>(blog-article)</code> folder use;</li></ul> <h2 id="blog-posts" data-svelte-h="svelte-oo6qi0"><a class="heading-link" title="Permalink" aria-hidden="true" href="#blog-posts"><span>#</span></a>Blog Posts</h2> <p data-svelte-h="svelte-1nntrbf">To know how blog posts work and how to create new ones, check out <a href="/blog-posts">How Blog Posts Work</a>.</p>`;
});
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  Page as P,
  __vite_glob_0_2 as _,
  metadata as m
};
