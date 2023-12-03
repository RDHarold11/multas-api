import express from "express";
const router = express.Router();
import {
  getSingleTarifario,
  getTarifarios,
  createTarifario,
} from "../controllers/tarifarioController.js";

router.route("/").post(createTarifario).get(getTarifarios);
router.route("/:id").get(getSingleTarifario);

export default router;
