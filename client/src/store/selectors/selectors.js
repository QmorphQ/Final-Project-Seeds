/**
 *
 * @param {Object} state
 * @returns {String} - one of downloadRequestStates
 */


// ================== Categories ===================
export const downloadCategoriesRequestStateSelector = (state) =>
  state.catalog.downloadRequestState;

export const allCategoriesSelector = (state) => state.catalog.categoriesList;

export const mainCategoriesSelector = (state) => {
  const mainCategories = state.catalog.categoriesList.filter(
    (category) => category.parentId === "null"
  );

  return mainCategories;
};


// =================== Products ===================
export const downloadProductsRequestStateSelector = (state) =>
  state.products.downloadAllRequestState;

export const productsSelector = (state) => {
  if (state.products.selectedCategories === "all") {
    return state.products.productList;
  }

  if (state.products.selectedCategories === "bundles") {
    const bundle = state.products.productList.filter(
      (product) => product.categories.indexOf("mix") > -1
    );

    return bundle;
  }

  const selectedProducts = state.products.productList.filter(
    (product) =>
      product.categories.indexOf(state.products.selectedCategories) > -1
  );
  
  return selectedProducts;
};

export const downloadFilteredProductsRequestStateSelector = (state) =>
  state.products.downloadFilteredRequestState;

export const filteredProductsSelector = (state) => state.products.filteredProducts;


// ========================= Slides =============================
export const downloadSlidesRequestStateSelector = (state) =>
  state.slides.downloadRequestState;

export const slidesSelector = (state) => state.slides.slideList;


// ======================= Customers/Login ==============================
export const customersSelector = (state) => state.customer.newCustomer;

export const loginStateSelector = (state) => state.customer.isLoggedIn;


// ======================= Cart ===========================
export const cartSelector = (state) => state.cart.cart;

// ======================== Wishlist =======================
export const wishlistSelector = (state) => state.wishlist.wishlist;


