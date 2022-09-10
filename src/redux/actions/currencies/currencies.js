import {
  CHANGE_CURRENCY,
  GET_CURRENCY_DONE,
  GET_CURRENCY_ERROR,
  GET_CURRENCY_LOADING,
} from '../../../constants/actionsTypes';
import { GET_CURRENCIES } from '../../../gql/getCurrency';
import { client } from '../../../services/apollo';

export const loadCurrencies = () => async (dispatch) => {
  dispatch({ type: GET_CURRENCY_LOADING });
  try {
    const {
      data: { currencies },
    } = await client.query({ query: GET_CURRENCIES });
    dispatch({
      type: GET_CURRENCY_DONE,
      payload: currencies,
    });
  } catch (err) {
    dispatch({ type: GET_CURRENCY_ERROR, payload: err });
  }
};

export const changeCurrency = (currency) => (dispatch) => {
  dispatch({
    type: CHANGE_CURRENCY,
    payload: currency,
  });
};
