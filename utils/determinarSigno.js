function determinarSignoZodiaco(fecha) {
  // La fecha debe estar en formato YYYY-MM-DD
  let partesFecha = fecha.split("-");
  let dia = parseInt(partesFecha[2]);
  let mes = parseInt(partesFecha[1]);

  if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
    return "Aries";
  } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
    return "Taurus";
  } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
    return "Gemini";
  } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
    return "Cancer";
  } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
    return "Leo";
  } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
    return "Virgo";
  } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
    return "Libra";
  } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
    return "Scorpio";
  } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
    return "Sagittarius";
  } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
    return "Capricorn";
  } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
    return "Aquarius";
  } else {
    return "Pisces";
  }
}

export default determinarSignoZodiaco;
// Ejemplo de uso
/*   var fechaEjemplo = '2003-03-11';
  var signo = determinarSignoZodiaco(fechaEjemplo);
  console.log('El signo del zodiaco es:', signo); */
