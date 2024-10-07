import { buyBook } from "./Action";

export const initialState = {
  NumberOfBooks: 20,
};

export const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case buyBook:
      return {
        ...state,
        NumberOfBooks: state.NumberOfBooks - 1,
      };
    // case sellBook:
    //   return {
    //     ...state,
    //     NumberOfBooks: state.initialState + 1,
    //   };
    default:
      return state;
  }
};
