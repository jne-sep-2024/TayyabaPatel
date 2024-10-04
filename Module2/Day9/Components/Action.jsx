export const CAKE_ORDER = "Cake_Oredr";
export const CAKE_RESTOCK = "Cake_Restocke";
export const ICECREAM_ORDER = "ICECREAM_ORDER";
export const ICECREAM_RESTOCK = "ICECREAM_RESTOCK";

export const ActionCreator = () => {
  return {
    type: CAKE_ORDER,
    payload: 1,
  };
};
export const ActionCreator1 = () => {
  return {
    type: CAKE_RESTOCK,
    payload: 1,
  };
};
export const IceCreamOrder = () => {
  return {
    type: ICECREAM_ORDER,
    payload: 4,
  };
};
export const IceCreamStock = () => {
  return {
    type: ICECREAM_RESTOCK,
    payload: 2,
  };
};
