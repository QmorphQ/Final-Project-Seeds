/**
 *
 * @param {Object} state
 * @returns {String} - one of downloadRequestStates
 */

export const allCategoriesSelector = (state) => state.catalog.categoriesList;

export const mainCategoriesSelector = (state) => {
  const mainCategories = state.catalog.categoriesList.filter(
    (category) => category.parentId === "null"
  );

  return mainCategories;
};

export const downloadRequestStateSelector = (state) =>
  state.products.downloadRequestState;

export const productsSelector = (state) => {
  if (state.products.selectedCategories === "all") {
    return state.products.productList;
  }

  const filteredProducts = state.products.productList.filter(
    (product) => product.categories === state.products.selectedCategories
  );

  return filteredProducts;
};

export const slidesSelector = (state) => state.slides.slideList;

export const customersSelector = (state) => state.customer;
