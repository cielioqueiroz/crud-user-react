function formater(value) {
  const num = typeof value === "number" ? value : Number(value);
  if (Number.isNaN(num)) return value;
  return num.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}

export function maskCurrencyBRL(numericValue) {
  if (
    numericValue === "" ||
    numericValue === null ||
    numericValue === undefined ||
    numericValue === 0
  ) {
    return "";
  }
  const num =
    typeof numericValue === "number" ? numericValue : Number(numericValue);
  if (Number.isNaN(num)) return "";
  return num.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function parseCurrencyInput(rawValue) {
  const digits = String(rawValue ?? "").replace(/\D/g, "");
  if (!digits) return 0;
  return Number(digits) / 100;
}

export default formater;
