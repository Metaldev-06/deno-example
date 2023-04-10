import { Router } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { getAllUser } from "../handlers/getAllUser.ts";
import { getUser } from "../handlers/getUser.ts";

const router = new Router();

router.get("/user", getAllUser);
router.get("/user/:id", getUser);

export default router;
