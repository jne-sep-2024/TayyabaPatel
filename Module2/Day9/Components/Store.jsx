import { createStore, combineReducers } from "redux";
import { reducer, iceCreamReducer } from "./Reducer";

const rootReducer = combineReducers({
  appState: reducer,
  iceCreamState: iceCreamReducer,
});

export const store = createStore(rootReducer);
