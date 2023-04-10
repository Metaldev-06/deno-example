export async function getUser(ctx: any) {
  const id = ctx.params.id;
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
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
