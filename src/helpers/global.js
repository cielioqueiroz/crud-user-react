export const formatter = (value) =>
  value?.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
