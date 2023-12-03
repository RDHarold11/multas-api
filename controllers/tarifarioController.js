import Tarifario from "../models/tarifarioModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createTarifario = asyncHandler(async (req, res) => {
  const { nombre, monto, descripcion } = req.body;
  const tarifario = new Tarifario({
    nombre,
    monto,
    descripcion,
  });
  const createdTarifario = await tarifario.save();
  res.status(201).json(createdTarifario);
});

const getTarifarios = asyncHandler(async (req, res) => {
  const tarifarios = await Tarifario.find({});
  if (tarifarios) {
    res.status(200).json(tarifarios);
  } else {
    res.status(404);
    throw new Error("Error al obtener los tarifarios");
  }
});

const getSingleTarifario = asyncHandler(async (req, res) => {
  const tarifario = await Tarifario.findById(req.params.id);
  if (tarifario) {
    res.status(200).json(tarifario);
  } else {
    res.status(404);
    throw new Error("Error al obtener el tarifario");
  }
});

export { getTarifarios, createTarifario, getSingleTarifario };
