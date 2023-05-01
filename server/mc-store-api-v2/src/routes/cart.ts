import { Router } from "express";
import apiHandler from "../modules/cart/api-handler.js";

const router = Router();

router.get("/", apiHandler.getCart);
router.post("/", apiHandler.addCart);
router.delete("/", apiHandler.deleteCart);

export default router;
