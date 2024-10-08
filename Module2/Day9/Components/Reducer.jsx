import {
  ICECREAM_RESTOCK,
  ICECREAM_ORDER,
  CAKE_ORDER,
  CAKE_RESTOCK,
} from "./Action";

const initialState = {
  count: 10,
  color: "red",
};
const initialStateOfIce = {
  count: 20,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return {
        ...state,
        count: state.count - 1,
      };
    case CAKE_RESTOCK: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialStateOfIce, action) => {
  switch (action.type) {
    case ICECREAM_ORDER:
      return { ...state, count: state.count - 1 };
    case ICECREAM_RESTOCK:
      return { ...state, count: state.count + 3 };
    default:
      return state;
  }
};

export { reducer, iceCreamReducer };
