import { CLEAR_DATA, PRODUCTS_STATE_CHANGE,CATEGORY_STATE_CHANGE } from '../constants';

const initialState = {
  products: [],
  categories:[]
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_STATE_CHANGE:
     return {
      ...state,
      products: action.products,
    };
    case CATEGORY_STATE_CHANGE:
      return {
       ...state,
       categories: action.categories,
     };
    case CLEAR_DATA:
      return initialState;
    default:
      return state;
  }
};
