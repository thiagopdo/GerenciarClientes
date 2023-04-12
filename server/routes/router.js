import express from "express";
import homeRoutes, { add_user, update_user } from "../services/render.js";
import controller from "../controller/controller.js";

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
router.post("/api/users", controller.create);
router.get("/api/users", controller.find);
router.put("/api/users/:id", controller.update);
router.delete("/api/users/:id", controller.remove);

export default router;
