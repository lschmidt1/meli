import axios from "../../axiosConfig/axios/api";

/* REDUCER CONSTS */
export const GET_SEARCH_RESULTS = "GET_SEARCH_RESULTS";
export const GET_SEARCH_RESULTS_FAIL = "GET_SEARCH_RESULTS_FAIL";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const GET_PRODUCT_DETAIL_FAIL = "GET_PRODUCT_DETAIL_FAIL";
export const SET_LOADING_TRUE = "SET_LOADING_TRUE";
export const SET_LOADING_FALSE = "SET_LOADING_FALSE";

/* DISPATCH FUNCTIONS */
export const getSearchResultsFn = (items, categories) => ({
  type: GET_SEARCH_RESULTS,
  items,
  categories,
});
export const getSearchResultsFailFn = (error) => ({
  type: GET_SEARCH_RESULTS_FAIL,
  error,
});
export const getProductDetailFn = (item, categories) => ({
  type: GET_PRODUCT_DETAIL,
  item,
  categories,
});
export const getProductDetailFailFn = (error) => ({
  type: GET_PRODUCT_DETAIL_FAIL,
  error,
});
export const setLoadingTrueFn = () => ({
  type: SET_LOADING_TRUE,
});
export const setLoadingFalseFn = () => ({
  type: SET_LOADING_FALSE,
});

/* ACTION FUNCTIONS */

/* GET PRODUCT SEARCH RESULTS */
export function getSearchResults(searchValue) {
  return (dispatch) => {
    dispatch(setLoadingTrueFn());
    return axios
      .get(`/api/items?q=${searchValue}`)
      .then((res) => {
        dispatch(setLoadingFalseFn());
        dispatch(getSearchResultsFn(res.data.items, res.data.categories));
      })
      .catch((err) => {
        dispatch(setLoadingFalseFn());
        dispatch(getSearchResultsFailFn(err));
      });
  };
}

/* GET PRODUCT DETAIL */
export function getProductDetail(id) {
  return (dispatch) => {
    dispatch(setLoadingTrueFn());
    return axios
      .get(`/api/items/${id}`)
      .then((res) => {
        dispatch(setLoadingFalseFn());
        dispatch(getProductDetailFn(res.data.item, res.data.item.categories));
      })
      .catch((err) => {
        dispatch(setLoadingFalseFn());
        dispatch(getProductDetailFailFn(err));
      });
  };
}
