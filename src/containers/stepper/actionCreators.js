import { SET_CURRENT_PAGE } from '../../redux/actionTypes';

export const setCurrentPage = pageNumber => ({
  type: SET_CURRENT_PAGE,
  payload: {
    pageNumber,
  }
});