import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tarifarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  monto: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
});
//check
const Tarifario = mongoose.model("Tarifario", tarifarioSchema);
export default Tarifario;
