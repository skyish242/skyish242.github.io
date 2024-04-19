import * as server from '../entries/pages/(blog-article)/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(blog-article)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.CYxzgY7f.js","_app/immutable/chunks/scheduler.CfnAWEg9.js","_app/immutable/chunks/index.Dh00sRbi.js","_app/immutable/chunks/ContentSection.BD-woBCz.js","_app/immutable/chunks/regex.QcShmZ96.js","_app/immutable/chunks/Image.DxvCuCoK.js","_app/immutable/chunks/Footer.DJvNrx-T.js","_app/immutable/chunks/Socials.BL8mZnBx.js","_app/immutable/chunks/index.CEeIW1J5.js","_app/immutable/chunks/meta.DbqF6U5k.js"];
export const stylesheets = ["_app/immutable/assets/2.DaHD7w2A.css","_app/immutable/assets/ContentSection.ojqmcWTj.css","_app/immutable/assets/Image.3O62NO6N.css","_app/immutable/assets/Footer.BLbztwI_.css","_app/immutable/assets/Socials.DArMKNCR.css"];
export const fonts = [];
