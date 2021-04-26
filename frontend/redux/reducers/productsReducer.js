import {
  GET_SEARCH_RESULTS,
  GET_SEARCH_RESULTS_FAIL,
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_DETAIL_FAIL,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
} from "../actions/productsActions";

const initialState = {
  /* PRODUCT SEARCH */
  searchResults: [],
  searchCategories: [],
  productDetail: [],
  productCategories: [],
  productsLoading: false,
  productsError: false,
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    /* SET PRODUCTS AND CATEGORIES */
    case GET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.items,
        searchCategories: action.categories,
        productDetail: [],
        productsError: false,
      };

    case GET_SEARCH_RESULTS_FAIL:
      return {
        ...state,
        searchResults: [],
        searchCategories: [],
        productsError: true,
      };

    /* SET PRODUCT DETAIL */
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.item,
        productCategories: action.categories,
        productsError: false,
      };

    case GET_PRODUCT_DETAIL_FAIL:
      return {
        ...state,
        productDetail: [],
        productCategories: [],
        productsError: true,
      };

    case SET_LOADING_TRUE:
      return { ...state, productsLoading: true };

    case SET_LOADING_FALSE:
      return { ...state, productsLoading: false };

    default:
      return state;
  }
}
