import express from "express";

import db from "./database/connection";

const routes = express.Router();

routes.post("/event", async (request, response) => {
  const { type, destination, amount } = request.body;

  await db("account").insert({
    id: destination,
    amount,
  });

  return response.status(201).send();
});

export default routes;
