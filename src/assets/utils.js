export const toUpperCaseFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1);

export const formatCurrency = (value) => value.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

export const generateSimpleId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let simpleId = "";

  for (let i = 0; i < 28; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    simpleId += characters.charAt(randomIndex);
  }

  return simpleId;
};
