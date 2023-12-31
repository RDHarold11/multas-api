import asyncHandler from "../middlewares/asyncHandler.js";
import Placa from "../models/placaModel.js";

const vehiculos = [
  {
    placa: "IVZ899",
    marca: "Toyota",
    modelo: "SUV",
    color: "Rojo",
    anio: 2023,
    estado: "Usado",
  },
  {
    placa: "CEN370",
    marca: "Honda",
    modelo: "Pickup",
    color: "Rojo",
    anio: 2002,
    estado: "Nuevo",
  },
  {
    placa: "BXB386",
    marca: "Chevrolet",
    modelo: "Pickup",
    color: "Blanco",
    anio: 2002,
    estado: "Nuevo",
  },
  {
    placa: "LLW666",
    marca: "Honda",
    modelo: "Hatchback",
    color: "Negro",
    anio: 2011,
    estado: "Usado",
  },
  {
    placa: "UYQ708",
    marca: "Toyota",
    modelo: "Hatchback",
    color: "Negro",
    anio: 2008,
    estado: "Nuevo",
  },
  {
    placa: "DRO531",
    marca: "Ford",
    modelo: "SUV",
    color: "Rojo",
    anio: 2000,
    estado: "Usado",
  },
  {
    placa: "TRS369",
    marca: "Ford",
    modelo: "Hatchback",
    color: "Rojo",
    anio: 2022,
    estado: "Nuevo",
  },
  {
    placa: "DOX791",
    marca: "Honda",
    modelo: "SUV",
    color: "Negro",
    anio: 2012,
    estado: "Nuevo",
  },
  {
    placa: "ELJ066",
    marca: "Toyota",
    modelo: "Pickup",
    color: "Azul",
    anio: 2014,
    estado: "Usado",
  },
  {
    placa: "PBH616",
    marca: "Ford",
    modelo: "SUV",
    color: "Azul",
    anio: 2021,
    estado: "Nuevo",
  },
  {
    placa: "JSP339",
    marca: "Chevrolet",
    modelo: "Sedan",
    color: "Azul",
    anio: 2018,
    estado: "Nuevo",
  },
  {
    placa: "SPO565",
    marca: "Honda",
    modelo: "Pickup",
    color: "Azul",
    anio: 2019,
    estado: "Nuevo",
  },
  {
    placa: "IMP573",
    marca: "Honda",
    modelo: "SUV",
    color: "Blanco",
    anio: 2021,
    estado: "Usado",
  },
  {
    placa: "YRN525",
    marca: "Ford",
    modelo: "SUV",
    color: "Blanco",
    anio: 2002,
    estado: "Nuevo",
  },
  {
    placa: "JFM838",
    marca: "Toyota",
    modelo: "Pickup",
    color: "Rojo",
    anio: 2008,
    estado: "Usado",
  },
  {
    placa: "WPT587",
    marca: "Ford",
    modelo: "Pickup",
    color: "Blanco",
    anio: 2002,
    estado: "Nuevo",
  },
  {
    placa: "LDS167",
    marca: "Chevrolet",
    modelo: "Hatchback",
    color: "Rojo",
    anio: 2021,
    estado: "Nuevo",
  },
  {
    placa: "KUY018",
    marca: "Honda",
    modelo: "Pickup",
    color: "Blanco",
    anio: 2018,
    estado: "Nuevo",
  },
  {
    placa: "KHI174",
    marca: "Honda",
    modelo: "SUV",
    color: "Rojo",
    anio: 2010,
    estado: "Nuevo",
  },
  {
    placa: "JFA948",
    marca: "Ford",
    modelo: "Pickup",
    color: "Azul",
    anio: 2018,
    estado: "Nuevo",
  },
  {
    placa: "MPQ336",
    marca: "Ford",
    modelo: "Pickup",
    color: "Rojo",
    anio: 2016,
    estado: "Nuevo",
  },
  {
    placa: "SZS224",
    marca: "Toyota",
    modelo: "Sedan",
    color: "Blanco",
    anio: 2001,
    estado: "Usado",
  },
  {
    placa: "WUI340",
    marca: "Ford",
    modelo: "Pickup",
    color: "Rojo",
    anio: 2007,
    estado: "Usado",
  },
  {
    placa: "SRC458",
    marca: "Honda",
    modelo: "Sedan",
    color: "Rojo",
    anio: 2006,
    estado: "Nuevo",
  },
  {
    placa: "UPO735",
    marca: "Honda",
    modelo: "Hatchback",
    color: "Blanco",
    anio: 2000,
    estado: "Usado",
  },
  {
    placa: "ADO221",
    marca: "Honda",
    modelo: "SUV",
    color: "Rojo",
    anio: 2000,
    estado: "Nuevo",
  },
  {
    placa: "CJH627",
    marca: "Toyota",
    modelo: "Sedan",
    color: "Negro",
    anio: 2023,
    estado: "Usado",
  },
  {
    placa: "RVQ463",
    marca: "Ford",
    modelo: "Sedan",
    color: "Negro",
    anio: 2002,
    estado: "Usado",
  },
  {
    placa: "XSH118",
    marca: "Toyota",
    modelo: "Sedan",
    color: "Rojo",
    anio: 2002,
    estado: "Usado",
  },
  {
    placa: "LKO033",
    marca: "Toyota",
    modelo: "Hatchback",
    color: "Blanco",
    anio: 2004,
    estado: "Nuevo",
  },
  {
    placa: "SBU337",
    marca: "Toyota",
    modelo: "Pickup",
    color: "Rojo",
    anio: 2009,
    estado: "Nuevo",
  },
  {
    placa: "VUU026",
    marca: "Honda",
    modelo: "Pickup",
    color: "Negro",
    anio: 2020,
    estado: "Nuevo",
  },
  {
    placa: "OBJ148",
    marca: "Ford",
    modelo: "Hatchback",
    color: "Rojo",
    anio: 2018,
    estado: "Usado",
  },
  {
    placa: "YSY421",
    marca: "Chevrolet",
    modelo: "Hatchback",
    color: "Rojo",
    anio: 2019,
    estado: "Usado",
  },
  {
    placa: "IXX298",
    marca: "Chevrolet",
    modelo: "SUV",
    color: "Negro",
    anio: 2004,
    estado: "Usado",
  },
  {
    placa: "XGG412",
    marca: "Ford",
    modelo: "SUV",
    color: "Negro",
    anio: 2009,
    estado: "Usado",
  },
  {
    placa: "HWG899",
    marca: "Toyota",
    modelo: "Pickup",
    color: "Blanco",
    anio: 2007,
    estado: "Nuevo",
  },
  {
    placa: "ELC164",
    marca: "Chevrolet",
    modelo: "Hatchback",
    color: "Negro",
    anio: 2016,
    estado: "Usado",
  },
  {
    placa: "PFL860",
    marca: "Honda",
    modelo: "Hatchback",
    color: "Rojo",
    anio: 2018,
    estado: "Nuevo",
  },
  {
    placa: "PCA405",
    marca: "Chevrolet",
    modelo: "Sedan",
    color: "Azul",
    anio: 2021,
    estado: "Usado",
  },
  {
    placa: "NAL337",
    marca: "Honda",
    modelo: "Pickup",
    color: "Rojo",
    anio: 2022,
    estado: "Usado",
  },
  {
    placa: "AAZ719",
    marca: "Toyota",
    modelo: "SUV",
    color: "Azul",
    anio: 2014,
    estado: "Usado",
  },
  {
    placa: "MUD188",
    marca: "Chevrolet",
    modelo: "Hatchback",
    color: "Negro",
    anio: 2006,
    estado: "Usado",
  },
  {
    placa: "OVQ268",
    marca: "Toyota",
    modelo: "Pickup",
    color: "Negro",
    anio: 2009,
    estado: "Usado",
  },
  {
    placa: "RGS977",
    marca: "Chevrolet",
    modelo: "Sedan",
    color: "Azul",
    anio: 2019,
    estado: "Usado",
  },
  {
    placa: "HNN777",
    marca: "Chevrolet",
    modelo: "Hatchback",
    color: "Blanco",
    anio: 2016,
    estado: "Usado",
  },
  {
    placa: "CEA511",
    marca: "Ford",
    modelo: "Sedan",
    color: "Negro",
    anio: 2023,
    estado: "Usado",
  },
  {
    placa: "ZMG629",
    marca: "Ford",
    modelo: "SUV",
    color: "Azul",
    anio: 2005,
    estado: "Nuevo",
  },
  {
    placa: "PQQ570",
    marca: "Chevrolet",
    modelo: "Sedan",
    color: "Negro",
    anio: 2002,
    estado: "Usado",
  },
  {
    placa: "UKE351",
    marca: "Chevrolet",
    modelo: "Pickup",
    color: "Azul",
    anio: 2021,
    estado: "Nuevo",
  },
];

const createPlaca = asyncHandler(async (req, res) => {
  const vehiculo = await Placa.insertMany(vehiculos);
  res.json(vehiculo);
});

const getVehiculoByPlaca = asyncHandler(async (req, res) => {
  const vehiculo = await Placa.findOne({ placa: req.params.placa });
  if (vehiculo) {
    res.status(200).json(vehiculo);
  } else {
    res.status(404);
    throw new Error("No se pudo encontrar el vehiculo");
  }
});

const getPlacas = asyncHandler(async (req, res) => {
  const vehiculo = await Placa.find({});
  res.json(vehiculo);
});

export { createPlaca, getVehiculoByPlaca, getPlacas };
