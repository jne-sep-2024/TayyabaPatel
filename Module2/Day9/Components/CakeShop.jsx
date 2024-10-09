import React from "react";
import { ActionCreator, ActionCreator1 } from "./Action";
import { useSelector, useDispatch } from "react-redux";

export default function CakeShop() {
  const noOfCake = useSelector((state) => state.count);
  const reStock = useSelector((state) => {
    state.count;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h1>From Cake Shop</h1>
      <h2>Number of Cakes - {noOfCake}</h2>
      <button
        onClick={() => {
          dispatch(ActionCreator());
        }}
      >
        Order Cake
      </button>
      <button
        onClick={() => {
          dispatch(ActionCreator1());
        }}
      >
        ReStock Cake
      </button>
      <h1>From Cake Shop</h1>
      <h2>Number of Cakes - {reStock}</h2>
      <button
        onClick={() => {
          dispatch(ActionCreator());
        }}
      >
        Order Cake
      </button>
      <button
        onClick={() => {
          dispatch(ActionCreator1());
        }}
      >
        ReStock Cake
      </button>
    </div>
  );
}
