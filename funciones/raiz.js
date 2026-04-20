function raiz(numero, indice = 2) {
  if (numero < 0 && indice % 2 === 0) {
    return "Error: No se puede calcular la raíz par de un número negativo";
  }
  if (indice === 0) {
    return "Error: El índice de la raíz no puede ser 0";
  }
  return Math.pow(numero, 1 / indice);
}