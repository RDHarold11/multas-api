import mongoose from "mongoose";
const Schema = mongoose.Schema;

const multaSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  cedula: {
    type: String,
    required: true,
  },
  placa: {
    type: String,
    required: true,
  },
  motivo: {
    type: String,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  comentario: {
    type: String,
    required: true,
  },
  nota: {
    type: String,
    required: true,
  },
  latitud: {
    type: Number,
    required: true,
  },
  longitud: {
    type: Number,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
  nombreConductor: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
});

const Multa = mongoose.model("Multa", multaSchema);
export default Multa;
