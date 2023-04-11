import { Application } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import router from "./routes/routes.ts";

const app = new Application();
const port = Deno.env.get("PORT") || 8000;

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", () => {
  console.log(`Server running on: http://localhost:${port}/`);
});

await app.listen({ port: +port });
