import { Router } from "express";
import apiHandler from "../modules/user/api-handler.js";

const router = Router();

router.get("/", apiHandler.getUsers);
router.get("/select", apiHandler.getUserPagination);
router.get("/:userId", apiHandler.getUserById);

router.post("/register", apiHandler.registerUser);
router.post("/login", apiHandler.loginUser);

router.put("/:userId", apiHandler.updateUser);

router.delete("/", apiHandler.deleteUsers);
router.delete("/:userId", apiHandler.deleteUser);

export default router;
