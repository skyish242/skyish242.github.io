export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicons/android-chrome-192x192.png","favicons/android-chrome-512x512.png","favicons/apple-touch-icon.png","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/favicon.png","favicons/safari-pinned-tab.svg","favicons/site.webmanifest","images/features/extensible.jpg","images/features/light-dark.jpg","images/features/markdown.jpg","images/features/open-source.jpg","images/features/optimized.jpg","images/features/themeable.jpg","images/posts/blog-posts.jpg","images/posts/customization.jpg","images/posts/frontmatter-preview-dashboard.png","images/posts/frontmatter-preview-edit.png","images/posts/project-structure.jpg","images/sample-image.png","images/site-preview.png","images/site-screenshot.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.rsjLlVHH.js","app":"_app/immutable/entry/app.y_Iys3NJ.js","imports":["_app/immutable/entry/start.rsjLlVHH.js","_app/immutable/chunks/scheduler.CfnAWEg9.js","_app/immutable/chunks/index.CEeIW1J5.js","_app/immutable/entry/app.y_Iys3NJ.js","_app/immutable/chunks/scheduler.CfnAWEg9.js","_app/immutable/chunks/index.Dh00sRbi.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
