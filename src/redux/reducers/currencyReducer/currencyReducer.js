import {
  CHANGE_CURRENCY,
  GET_CURRENCY_DONE,
  GET_CURRENCY_ERROR,
  GET_CURRENCY_LOADING,
} from '../../../constants/actionsTypes';

const initialState = {
  data: {},
  loading: false,
  error: null,
  defaultCurrency: {
    label: '$',
    symbol: 'USD',
  },
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCY_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_CURRENCY_DONE:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case GET_CURRENCY_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CHANGE_CURRENCY:
      return {
        ...state,
        defaultCurrency: action.payload,
      };
    default:
      return state;
  }
};

export default currencyReducer;
