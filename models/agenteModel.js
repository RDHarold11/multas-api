import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const Schema = mongoose.Schema;

const agenteSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fecha: {
      type: String,
      required: true,
    },
    signo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

agenteSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

agenteSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", agenteSchema);

export default User;
