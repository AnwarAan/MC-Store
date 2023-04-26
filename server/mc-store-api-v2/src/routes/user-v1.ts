import { Router } from "express";
import apiHandler from "../modules/user/api-handler-v1.js";
import jwtAuth from "../helpers/jwt-auth.js";
import basicAuth from "../helpers/basic-auth.js";

const router = Router();

router.get("/", basicAuth, apiHandler.getUsers);
router.get("/select", basicAuth, apiHandler.getUserPagination);
router.get("/:userId", basicAuth, apiHandler.getUserById);

router.post("/register", apiHandler.registerUser);
router.post("/login", apiHandler.loginUser);

router.put("/:userId", jwtAuth, apiHandler.updateUser);

router.delete("/", jwtAuth, apiHandler.deleteUsers);
router.delete("/:userId", jwtAuth, apiHandler.deleteUser);

export default router;
