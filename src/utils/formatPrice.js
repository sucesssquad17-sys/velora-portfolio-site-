/**
 * Formats a number to Indian Rupee (INR) currency format.
 * @param {number} value - The price value to format
 * @returns {string} Formatted price string
 */
export const formatPrice = (value) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
};
