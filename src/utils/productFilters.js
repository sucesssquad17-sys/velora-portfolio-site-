/**
 * Filters a list of products by category and fit.
 * @param {Array} productsList - The full list of products
 * @param {Object} criteria - Filter criteria
 * @param {string} criteria.category - Category slug
 * @param {string} criteria.fit - Fit type (Oversized, Relaxed, Structured, Regular, etc.)
 * @returns {Array} Filtered list of products
 */
export const filterProducts = (productsList, { category, fit } = {}) => {
  return productsList.filter(product => {
    if (category && product.categorySlug !== category) {
      return false;
    }
    if (fit && product.fit.toLowerCase() !== fit.toLowerCase()) {
      return false;
    }
    return true;
  });
};
