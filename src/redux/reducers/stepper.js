import { SET_CURRENT_PAGE } from "../actionTypes";
import { STEPPER } from "../../constants";

const initialState = STEPPER;

const stepper = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload.pageNumber
      };
    }
    default: {
      return state;
    }
  }
};

export default stepper;
