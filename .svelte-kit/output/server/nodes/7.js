import * as server from '../entries/pages/(waves)/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(waves)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(waves)/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.8xi3JD6a.js","_app/immutable/chunks/scheduler.CfnAWEg9.js","_app/immutable/chunks/index.Dh00sRbi.js","_app/immutable/chunks/Socials.BL8mZnBx.js","_app/immutable/chunks/Button.S7rI-nW7.js","_app/immutable/chunks/regex.QcShmZ96.js","_app/immutable/chunks/ContentSection.BD-woBCz.js","_app/immutable/chunks/Image.DxvCuCoK.js"];
export const stylesheets = ["_app/immutable/assets/7.EhBFrnD8.css","_app/immutable/assets/Socials.DArMKNCR.css","_app/immutable/assets/Button.UZwAn0a2.css","_app/immutable/assets/ContentSection.ojqmcWTj.css","_app/immutable/assets/Image.3O62NO6N.css"];
export const fonts = [];
