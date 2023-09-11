export function toUpperCaseFirstLetter(palabra) {
  return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}

export function formatoPesos(valor) {
  return valor.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
}
