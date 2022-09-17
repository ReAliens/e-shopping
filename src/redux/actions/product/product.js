import {
  PRODUCT_DONE,
  PRODUCT_ERROR,
  PRODUCT_LOADING,
} from '../../../constants/actionsTypes';
import { GET_PRODUCT_DETAILS } from '../../../gql/getProductDetails';
import { client } from '../../../services/apollo';

export const getProductDetails = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_LOADING });
  try {
    const { data } = await client.query({
      query: GET_PRODUCT_DETAILS,
      variables: { id },
    });
    dispatch({ type: PRODUCT_DONE, payload: data.product });
  } catch (error) {
    dispatch({ type: PRODUCT_ERROR, payload: error });
  }
};
