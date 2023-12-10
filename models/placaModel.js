import mongoose from "mongoose";
const Schema = mongoose.Schema;

const placaSchema = new Schema({
  placa: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  anio: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
});

const Placa = mongoose.model("Placa", placaSchema);
export default Placa;
