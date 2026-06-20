import { createServer } from "node:http";
import { Readable } from "node:stream";

const port = Number.parseInt(process.env.PORT ?? "3000", 10);
const host = process.env.HOST ?? "0.0.0.0";

const { default: app } = await import("./dist/server/server.js");

function getRequestUrl(req) {
  const protocol =
    req.headers["x-forwarded-proto"] ||
    (req.socket.encrypted ? "https" : "http");
  const hostname = req.headers.host || `${host}:${port}`;
  return new URL(req.url || "/", `${protocol}://${hostname}`);
}

function getRequestBody(req) {
  const method = req.method || "GET";
  if (method === "GET" || method === "HEAD") return undefined;
  return Readable.toWeb(req);
}

function toWebRequest(req) {
  return new Request(getRequestUrl(req), {
    method: req.method,
    headers: req.headers,
    body: getRequestBody(req),
    duplex: "half",
  });
}

const server = createServer(async (req, res) => {
  try {
    const response = await app.fetch(toWebRequest(req), {}, {});

    res.statusCode = response.status;
    res.statusMessage = response.statusText;

    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (!response.body) {
      res.end();
      return;
    }

    const bodyStream = Readable.fromWeb(response.body);
    bodyStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end("Internal Server Error");
  }
});

server.listen(port, host, () => {
  console.log(`Hostinger server listening on http://${host}:${port}`);
});
