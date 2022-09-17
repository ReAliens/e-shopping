import {
  PRODUCT_DONE,
  PRODUCT_ERROR,
  PRODUCT_LOADING,
} from '../../../constants/actionsTypes';

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_DONE:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
