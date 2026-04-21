// funciones/logaritmo.js
// Funcion: log(num, base)
// Autor: Gilberto Rodriguez - G8

export function logaritmo(num, base) {
  if (num <= 0 || base <= 0 || base === 1) {
    return "Error: valores invalidos";
  }
  return Math.log(num) / Math.log(base);
}