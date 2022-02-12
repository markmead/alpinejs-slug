build({
  entryPoints: [`builds/cdn.js`],
  outfile: `dist/slug.min.js`,
  platform: "browser",
  define: { CDN: true },
});

build({
  entryPoints: [`builds/module.js`],
  outfile: `dist/slug.esm.js`,
  platform: "neutral",
  mainFields: ["main", "module"],
});

build({
  entryPoints: [`builds/module.js`],
  outfile: `dist/slug.cjs.js`,
  target: ["node10.4"],
  platform: "node",
});

function build(options) {
  options.define || (options.define = {});

  return require("esbuild")
    .build({ ...options, minify: true, bundle: true })
    .catch(() => process.exit(1));
}
