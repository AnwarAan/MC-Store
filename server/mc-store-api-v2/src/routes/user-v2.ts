import { Router } from "express";
import apiHandlerV2 from "../modules/user/api-handler-v2.js";
const router = Router();

router.get("/", apiHandlerV2.getUsers);
router.get("/select", apiHandlerV2.getUserPagination);
router.get("/:userId", apiHandlerV2.getUserById);

router.post("/register", apiHandlerV2.registerUser);
router.post("/login", apiHandlerV2.loginUser);

router.put("/:userId", apiHandlerV2.updateUser);

router.delete("/", apiHandlerV2.deleteUsers);
router.delete("/:userId", apiHandlerV2.deleteUser);

export default router;
