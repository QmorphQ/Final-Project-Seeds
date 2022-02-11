export const SORT_PRODUCTS_BY_PRICE = "SORT_PRODUCTS_BY_PRICE";
export const sortProductsByPrice = (request) => ({
  type: SORT_PRODUCTS_BY_PRICE,
  payload: request,
});

export const  SET_PARAMS = "SET_PARAMS";
export const setParams = (params) => ({
  type: SET_PARAMS,
  payload: params,
});

export const  SET_QUERY_PARAMS = "SET_QUERY_PARAMS";
export const setQueryParams = (queryParams) => ({
  type: SET_QUERY_PARAMS,
  payload: queryParams,
});

export const  SET_INPUT_VALUE_FROM = "SET_INPUT_VALUE_FROM";
export const setInputValueFrom = (value) => ({
  type: SET_INPUT_VALUE_FROM,
  payload: value,
});

export const  SET_INPUT_VALUE_TO = "SET_INPUT_VALUE_TO";
export const setInputValueTo = (value) => ({
  type: SET_INPUT_VALUE_TO,
  payload: value,
});

export const  SET_SLIDER_VALUES = "SET_SLIDER_VALUES";
export const setSliderValues = (values) => ({
  type: SET_SLIDER_VALUES,
  payload: values,
});

export const  SET_IS_OPEN_ORIGIN_CHECKBOX = "SET_IS_OPEN_ORIGIN_CHECKBOX";
export const setIsOpenOriginCheckbox = (isOpen) => ({
  type: SET_IS_OPEN_ORIGIN_CHECKBOX,
  payload: isOpen,
});

export const  SET_ORIGIN_CHECKBOX_STATE = "SET_ORIGIN_CHECKBOX_STATE";
export const setOriginCheckboxState = (checkboxState) => ({
  type: SET_ORIGIN_CHECKBOX_STATE,
  payload: checkboxState,
});


