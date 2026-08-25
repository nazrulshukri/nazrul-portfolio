import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const clientDir = new URL("dist/client/", root);
const outputDir = new URL("vercel-static/", root);
const workerUrl = new URL("dist/server/index.js", root);

function getOrigin() {
  const host =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    "nazrul-portfolio.vercel.app";

  return host.startsWith("http") ? host : `https://${host}`;
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await cp(clientDir, outputDir, { recursive: true });

workerUrl.searchParams.set("vercel-static-build", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);
const origin = getOrigin();
const url = new URL("/", origin);

const response = await worker.fetch(
  new Request(url, {
    headers: {
      accept: "text/html",
      host: url.host,
      "x-forwarded-host": url.host,
      "x-forwarded-proto": url.protocol.replace(":", ""),
    },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Static render failed with HTTP ${response.status}`);
}

const html = await response.text();

await writeFile(new URL("index.html", outputDir), html);
await writeFile(new URL("404.html", outputDir), html);

console.log(`Vercel static export written to ${outputDir.pathname}`);
