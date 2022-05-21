import { serve } from "https://deno.land/std/http/server.ts";
const server = serve({ port: 5000 });
for await (const server_request of server) {
  const _file = await Deno.readFile('./index.html');
  const decoder = new TextDecoder()
  server_request.respond({ body: decoder.decode(_file) });
}