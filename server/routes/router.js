import express from "express";
import homeRoutes, { add_user, update_user } from "../services/render.js";
import { create, find, update, remove } from "../controller/controller.js";
//import upload from "../routes/upload.js";

const router = express.Router();

/**
 * @description Root Route
 * @method GET /
 */

router.get("/", homeRoutes);

/**
 * @description adicionar cliente
 * @method GET /add-user
 */

router.get("/add-user", add_user);

/**
 * @description editar cliente
 * @method GET /update-user
 */

router.get("/update-user", update_user);

// API
router.post("/api/users", create);
router.get("/api/users", find);
router.put("/api/users/:id", update);
router.delete("/api/users/:id", remove);
//router.post("/upload", upload);
export default router;
