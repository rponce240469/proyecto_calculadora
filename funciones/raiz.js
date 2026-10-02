export function raiz(a, b = 2) {
  if (b === 0) {
    throw new RangeError("El índice de la raíz no puede ser 0.");
  }

  if (a < 0) {
    if (b % 2 === 0) {
      throw new RangeError("No existe raíz real par de un número negativo.");
    }
    return -Math.pow(-a, 1 / b);
  }

  return Math.pow(a, 1 / b);

}