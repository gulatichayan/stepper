import { SET_PARTS } from '../../redux/actionTypes';

export const setParts = parts => ({
  type: SET_PARTS,
  payload: {
    parts,
  }
});