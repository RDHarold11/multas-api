import { createMulta, getMultas } from "../controllers/multaController.js";
import express from "express";
const router = express.Router();

router.post("/", createMulta);
router.get("/:id", getMultas);

export default router;
