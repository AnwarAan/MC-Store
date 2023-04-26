import { Router } from "express";
import apiHandler from "../modules/product/api-handler.js";
import basicAuth from "../helpers/basic-auth.js";

const router = Router();

router.get("/", basicAuth, apiHandler.getProducts);
router.get("/select", basicAuth, apiHandler.getProductPagination);
router.get("/:productId", basicAuth, apiHandler.getProductById);

router.post("/", basicAuth, apiHandler.addProduct);
router.put("/:productId", basicAuth, apiHandler.updateProduct);

router.delete("/", basicAuth, apiHandler.deleteProducts);
router.delete("/:productId", basicAuth, apiHandler.deleteProduct);

export default router;
