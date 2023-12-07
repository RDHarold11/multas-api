import asyncHandler from "../middlewares/asyncHandler.js";
import Multa from "../models/multaModel.js";

const createMulta = asyncHandler(async (req, res) => {
  const {
    userId,
    cedula,
    placa,
    motivo,
    foto,
    comentario,
    nota,
    latitud,
    longitud,
    fecha,
    nombreConductor,
    telefono,
    direccion,
    hora,
  } = req.body;

  const multa = new Multa({
    userId,
    cedula,
    placa,
    motivo,
    foto,
    comentario,
    nota,
    latitud,
    longitud,
    fecha,
    nombreConductor,
    telefono,
    direccion,
    hora,
  });
  const createdMulta = await multa.save();
  if (createdMulta) {
    res.status(201).json(createdMulta);
  } else {
    res.status(404);
    throw new Error("No se pudo crear la multa");
  }
});

const getMultas = asyncHandler(async (req, res) => {
  const multas = await Multa.find({ userId: req.params.id });
  res.json(multas);
});

export { createMulta, getMultas };
