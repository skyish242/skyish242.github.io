import * as server from '../entries/pages/(waves)/blog/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(waves)/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(waves)/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.Bnp4DjzS.js","_app/immutable/chunks/scheduler.CfnAWEg9.js","_app/immutable/chunks/index.Dh00sRbi.js","_app/immutable/chunks/ContentSection.BD-woBCz.js","_app/immutable/chunks/regex.QcShmZ96.js","_app/immutable/chunks/Image.DxvCuCoK.js"];
export const stylesheets = ["_app/immutable/assets/9.BrzTJCJY.css","_app/immutable/assets/ContentSection.ojqmcWTj.css","_app/immutable/assets/Image.3O62NO6N.css"];
export const fonts = [];
