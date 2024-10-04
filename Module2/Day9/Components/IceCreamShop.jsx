import React from "react";
import { IceCreamOrder, IceCreamStock } from "./Action";
import { useSelector, useDispatch } from "react-redux";

export default function IceCreamShop() {
  const noOfIce = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>IceCream Shop :</h1>
      <h2>No Of IceCream -{noOfIce}</h2>
      <button
        onClick={() => {
          dispatch(IceCreamOrder());
        }}
      >
        Order Ice cream
      </button>
      <button onClick={() => dispatch(IceCreamStock())}>IceCream Stock</button>
    </div>
  );
}
