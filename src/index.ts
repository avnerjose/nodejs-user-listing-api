import express, { json } from "express";

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(json());

app.use("/users", usersRoutes);

export { app };
