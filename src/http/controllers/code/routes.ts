import { Router} from "express";

import { coverter } from "./converter";
import { uploadImage } from "./upload-image";

const routes = Router();

routes.post("/convert", coverter)
routes.post("/download-code-image", uploadImage)

export const codeRoutes = routes;