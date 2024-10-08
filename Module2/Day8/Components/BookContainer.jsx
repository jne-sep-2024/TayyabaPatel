import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { purches_book } from "./Redux/Action";

export default function BookContainer() {
  const noOfBooks = useSelector((state) => state.NumberOfBooks);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Book Container</h1>
      <h2>No Of Books - {noOfBooks}</h2>
      <button onClick={() => dispatch(purches_book())}>Buy Book</button>
    </div>
  );
}
