// Formats a number as a Chilean-style price string with a thousands separator.
// Example: formatCurrency(25000) -> "25.000"
export const formatCurrency = (value) => {
  return value.toLocaleString("es-CL");
};
