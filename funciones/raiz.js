function raiz(a, b = 2) {
  if (a < 0 && b % 2 === 0) {
    return "Error: No se puede calcular la raíz par de un número negativo";
  }
  if (b === 0) {
    return "Error: El índice de la raíz no puede ser 0";
  }
  return Math.pow(a, 1 / b);
}