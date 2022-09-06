import {
  CATEGORIES_DONE,
  CATEGORIES_ERROR,
  CATEGORIES_LOADING,
} from '../../../constants/actionsTypes';
import { GET_CATEGORIES } from '../../../gql/getCategories';
import { client } from '../../../services/apollo';

export const getCategoriesData = (categoryName) => async (dispatch) => {
  dispatch({ type: CATEGORIES_LOADING });
  try {
    const {
      data: { category },
    } = await client.query({
      query: GET_CATEGORIES,
      variables: { category: { title: categoryName || 'all' } },
      fetchPolicy: 'network-only',
    });
    dispatch({ type: CATEGORIES_DONE, payload: category });
  } catch (err) {
    dispatch({ type: CATEGORIES_ERROR, payload: err });
  }
};
