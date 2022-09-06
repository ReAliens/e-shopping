import {
  CATEGORIES_LOADING,
  CATEGORIES_ERROR,
  CATEGORIES_DONE,
} from '../../../constants/actionsTypes';

const initialState = {
  data: {
    all: [],
    clothes: [],
    tech: [],
  },
  error: null,
  loading: false,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CATEGORIES_DONE:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case CATEGORIES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default listReducer;
