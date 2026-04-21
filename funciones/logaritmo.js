// funciones/logaritmo.js
// Función: log(num, base)
// Autor: [Gilberto Rodríguez] - G8

function logaritmo(num, base) {
  if (num <= 0 || base <= 0 || base === 1) {
    return "Error: valores inválidos";
  }
  return Math.log(num) / Math.log(base);
}