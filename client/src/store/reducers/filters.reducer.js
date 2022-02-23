import {
  SET_PARAMS,
  SET_QUERY_PARAMS,
  SORT_PRODUCTS_BY_PRICE,
  SET_SELECTED_CATEGORY,
  SET_INPUT_VALUE_FROM,
  SET_INPUT_VALUE_TO,
  SET_SLIDER_VALUES,
  SET_ORIGIN_CHECKBOX_STATE,
  SET_MATURATION_CHECKBOX_STATE,
} from "../actions/filters.actions";

const initialState = {
  params: {},
  queryParams: {},
  sortedByPrice: "most",
  selectedCategory: [],
  inputValueFrom: 0,
  inputValueTo: 30,
  sliderValues: [0, 30],
  originCheckboxState: [],
  maturationCheckboxState: [],
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PARAMS:
      if (Object.keys(action.payload).length !== 0) {
        return {
          ...state,
          params: action.payload,
        };
      } 
        return state;
     
    case SET_QUERY_PARAMS:
      if (action.payload.toString() !== "") {
        return {
          ...state,
          queryParams: action.payload,
        };
      } 
        return state;
      

    case SORT_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sortedByPrice: action.payload,
      };

    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
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

    case SET_ORIGIN_CHECKBOX_STATE:
      return {
        ...state,
        originCheckboxState: action.payload,
      };

    case SET_MATURATION_CHECKBOX_STATE:
      return {
        ...state,
        maturationCheckboxState: action.payload,
      };

    default:
      return state;
  }
};

export default filtersReducer;
