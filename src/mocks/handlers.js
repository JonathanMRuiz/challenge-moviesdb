import { rest } from "msw";
import getMovies from "./data/getMovies/getMovies";

export const handlers = [
  rest.get("*/3/movie/popular*", (req, res, ctx) => {
    return res(ctx.json(getMovies), ctx.status(200));
  }),
];
