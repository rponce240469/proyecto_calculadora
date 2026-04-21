import { suma } from './funciones/suma.js';
import { promedio } from './funciones/promedio.js';
import { maximo } from './funciones/maximo.js';
import { raiz } from './funciones/raiz.js';

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("btnCalcular").addEventListener("click", calcular);

});

function calcular() {

  const op = document.getElementById("operacion").value;
  const v1 = parseFloat(document.getElementById("valor1").value);
  const v2 = parseFloat(document.getElementById("valor2").value);

  if (isNaN(v1) || isNaN(v2)) {
    alert("Ingrese valores válidos");
    return;
  }

  let resultado;

  if (op === "suma") {
    resultado = suma(v1, v2);
  } else if (op === "promedio") {
    resultado = promedio(v1, v2);
  } else if (op === "maximo") {
    resultado = maximo(v1, v2);
  }
  else if (op == "raiz") {
    resultado = raiz(v1, v2);
  }
  
  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}