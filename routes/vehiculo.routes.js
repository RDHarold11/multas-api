import express from "express";
const router = express.Router();

import {
  createPlaca,
  getPlacas,
  getVehiculoByPlaca,
} from "../controllers/placaController.js";

router.post("/", createPlaca);
router.get("/:placa", getVehiculoByPlaca);
router.get("/", getPlacas);

export default router;
