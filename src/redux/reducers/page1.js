import { SET_PARTS } from "../actionTypes";
import { PAGE_1 } from "../../constants";

const initialState = PAGE_1;

const page1 = (state = initialState, action) => {
  switch (action.type) {
    case SET_PARTS: {
      return {
        ...state,
        parts: action.payload.parts
      };
    }
    default: {
      return state;
    }
  }
};

export default page1;
