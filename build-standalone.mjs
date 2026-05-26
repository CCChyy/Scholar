import { readFile, writeFile } from "node:fs/promises";

const htmlPath = new URL("./index.html", import.meta.url);
const cssPath = new URL("./styles.css", import.meta.url);
const jsPath = new URL("./app.js", import.meta.url);
const svgPath = new URL("./assets/academic-network.svg", import.meta.url);
const outPath = new URL("./dist/index.html", import.meta.url);

const [html, css, js, svg] = await Promise.all([
  readFile(htmlPath, "utf8"),
  readFile(cssPath, "utf8"),
  readFile(jsPath, "utf8"),
  readFile(svgPath, "utf8"),
]);

const svgDataUrl = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

const standalone = html
  .replace('<link rel="stylesheet" href="styles.css" />', `<style>\n${css}\n</style>`)
  .replace('src="assets/academic-network.svg"', `src="${svgDataUrl}"`)
  .replace('<script src="app.js"></script>', `<script>\n${js}\n</script>`);

await writeFile(outPath, standalone);

console.log(`Built ${outPath.pathname}`);
