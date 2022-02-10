import {
  SORT_PRODUCTS_BY_PRICE,
  SET_PARAMS,
  SET_QUERY_PARAMS,
  SET_INPUT_VALUE_FROM,
  SET_INPUT_VALUE_TO,
  SET_SLIDER_VALUES,
  SET_IS_OPEN_ORIGIN_CHECKBOX,
  SET_ORIGIN_CHECKBOX_STATE,
} from "../actions/filters.actions";

const defaultParams = {
  perPage: 9,
  startPage: 1,
  sort: "-currentPrice",
};

const initialState = {
  sortedByPrice: "most",
  params: defaultParams,
  queryParams: new URLSearchParams(defaultParams),
  inputValueFrom: 0,
  inputValueTo: 30,
  sliderValues: [0, 30],
  isOpenOriginCheckbox: false,
  originCheckboxState: [],
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sortedByPrice: action.payload,
      };

    case SET_PARAMS:
      return {
        ...state,
        params: action.payload,
      };

    case SET_QUERY_PARAMS:
      return {
        ...state,
        queryParams: action.payload,
      };

    case SET_INPUT_VALUE_FROM:
      return {
        ...state,
        inputValueFrom: action.payload,
      };

    case SET_INPUT_VALUE_TO:
      return {
        ...state,
        inputValueTo: action.payload,
      };

    case SET_SLIDER_VALUES:
      return {
        ...state,
        sliderValues: action.payload,
      };

    case SET_IS_OPEN_ORIGIN_CHECKBOX:
      return {
        ...state,
        isOpenOriginCheckbox: action.payload,
      };

    case SET_ORIGIN_CHECKBOX_STATE:
      return {
        ...state,
        originCheckboxState: action.payload,
      };

    default:
      return state;
  }
};

export default filtersReducer;
