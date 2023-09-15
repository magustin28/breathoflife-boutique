export const toUpperCaseFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1);

export const formatCurrency = (value) => value.toLocaleString("es-AR", { style: "currency", currency: "ARS" });
