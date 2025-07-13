import Elysia from "elysia";
import userApi from "./features/user/user.api";
import authApi from "./features/user/auth.api";

const api = new Elysia({ prefix: "/api" })
  .use(userApi)
  .use(authApi)
;

export default api;