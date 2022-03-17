import { PRODUCTS_STATE_CHANGE,CATEGORY_STATE_CHANGE, CLEAR_DATA } from "../constants/index";

export function clearData() {
  return (dispatch) => {
    dispatch({ type: CLEAR_DATA });
  };
}

export function getProducts(productList) {
  return (dispatch) => {
    let products = productList;
    dispatch({ type: PRODUCTS_STATE_CHANGE, products });
  };
}

export function getCategories(categories) {
  return (dispatch) => {
    dispatch({ type: CATEGORY_STATE_CHANGE, categories });
  };
}
