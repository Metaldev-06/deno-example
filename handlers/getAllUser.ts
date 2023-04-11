import { Context } from "https://deno.land/x/oak@v12.1.0/mod.ts";

export async function getAllUser(ctx: Context) {
  const url = "https://jsonplaceholder.typicode.com/photos";
  try {
    const response = await fetch(`${url}`);
    const data = await response.json();
    ctx.response.status = 200;
    ctx.response.body = data;
  } catch (error: unknown) {
    console.log(error);
    ctx.response.status = 500;
    ctx.response.body = { error: "Internal Server Error" };
  }
}
