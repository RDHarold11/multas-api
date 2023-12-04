import determinarSignoZodiaco from "../utils/determinarSigno.js";
import User from "../models/agenteModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      fecha: user.fecha,
      signo: user.signo,
    });
  } else {
    res.status(401);
    throw new Error("Credenciales incorrectas");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { username, password, fecha } = req.body;
  const user = await User.create({
    username,
    password,
    fecha,
    signo: determinarSignoZodiaco(fecha),
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      password: user.password,
      fecha: user.fecha,
      signo: user.signo,
    });
  } else {
    res.status(400);
    throw new Error("Invalido");
  }
});

export { authUser, registerUser };
