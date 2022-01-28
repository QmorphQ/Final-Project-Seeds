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

export const customersSelector = (state) =>
  state.customer;
