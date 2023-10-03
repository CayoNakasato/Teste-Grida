import express from "express";
import cors from "cors";

import { codeRoutes } from "./http/controllers/code/routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use(codeRoutes)

export default app;