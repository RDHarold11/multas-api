function generarDatos() {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeros = "0123456789";

  const datos = [];

  for (let i = 0; i < 50; i++) {
    const placa =
      letras[Math.floor(Math.random() * letras.length)] +
      letras[Math.floor(Math.random() * letras.length)] +
      letras[Math.floor(Math.random() * letras.length)] +
      numeros[Math.floor(Math.random() * numeros.length)] +
      numeros[Math.floor(Math.random() * numeros.length)] +
      numeros[Math.floor(Math.random() * numeros.length)];

    const marca = ["Toyota", "Honda", "Ford", "Chevrolet"][
      Math.floor(Math.random() * 4)
    ];
    const modelo = ["Sedan", "SUV", "Pickup", "Hatchback"][
      Math.floor(Math.random() * 4)
    ];
    const color = ["Rojo", "Azul", "Negro", "Blanco"][
      Math.floor(Math.random() * 4)
    ];
    const anio = Math.floor(Math.random() * (2023 - 2000 + 1)) + 2000;
    const estado = ["Nuevo", "Usado"][Math.floor(Math.random() * 2)];

    datos.push({ placa, marca, modelo, color, anio, estado });
  }

  return datos;
}

// Generar datos
const datosGenerados = generarDatos();

// Imprimir los primeros 5 registros como ejemplo
for (let i = 0; i < 50; i++) {
  console.log(datosGenerados[i]);
}
