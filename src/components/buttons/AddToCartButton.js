import React from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, startCartItems } from "../../store/cartItemSlice";
import { raiseGlobalCount } from "../../store/globalCountSlice";

const AddToCartButton = ({ count, setCount, item }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartItems);
  console.log(count);

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          if (cartItems[0].item.id === 0) {
            dispatch(startCartItems());
          }

          dispatch(addCartItems({ item: item, itemCount: count }));
          dispatch(raiseGlobalCount(count));
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default AddToCartButton;
