import { rest } from "msw";

const routes = { user: "/users", login: "/login" };

const apiUrl = process.env.REACT_APP_API_URL!;

export const handlers = [
  rest.post(`${apiUrl}${routes.user}${routes.login}`, async (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json({
        token: "mockedToken",
      })
    );
  }),
];

export const errorHandler = [
  rest.post(`${apiUrl}${routes.user}${routes.login}`, async (req, res, ctx) => {
    return res(ctx.status(401));
  }),
];
