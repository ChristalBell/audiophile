import React from "react";
import ClearCartButton from "../buttons/ClearCartButton";
import CheckoutButton from "../buttons/CheckoutButton";
import { useDispatch, useSelector } from "react-redux";
import { minusOne, addOne } from "../../store/globalCountSlice";
import { lowerTotalPrice, raiseTotalPrice } from "../../store/totalPriceSlice";
import SingleProductDisplay from "./SingleProductDisplay";
import Counter from "../shared/Counter";
import { raiseCountCartItems } from "../../store/cartItemSlice";

const CartPreview = () => {
  const { cartItems } = useSelector((state) => state.cartItems);
  const { totalPrice } = useSelector((state) => state.totalPrice);
  const { globalCount } = useSelector((state) => state.globalCount);
  const dispatch = useDispatch();
  console.log(cartItems);
  console.log(globalCount);
  return (
    <div
      className="container"
      style={{
        backgroundColor: "white",
        borderRadius: ".25rem",
        boxShadow: "1rem .5rem .75rem hsl(0, 0%, 10%)",
        color: "hsl(0, 0%, 5%)",
        padding: "1rem 2rem ",
        translate: "-3rem 0",
        width: "25vw",
      }}
    >
      <div className="top" style={{ display: "flex" }}>
        <p style={{ marginRight: "2rem" }}>
          {globalCount}
          <span style={{ color: "hsl(24, 66%, 55%)" }}>(some number)</span>
        </p>
        <ClearCartButton />
      </div>

      <div>
        {cartItems.map((cartProduct) => (
          <div
            className="can-only-have-one-main-div"
            style={{ display: "flex" }}
          >
            <img
              src={cartProduct.item.image.mobile}
              alt={cartProduct.item.name}
              style={{ height: "8vh", width: "8vw" }}
            />
            <p> {cartProduct.item.name} </p>
            <p style={{ color: "blue" }}>{cartProduct.item.itemCount} </p>
          </div>
        ))}
      </div>

      <div
        className="total"
        style={{
          display: "flex",
          flexDirection: "column",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        <div
          className="price"
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "hsl(24, 66%, 55%)",
          }}
        >
          <p style={{ textTransform: "uppercase" }}>Total $ {totalPrice}</p>
          <p> total count </p>
        </div>

        <div style={{ alignSelf: "center" }}>
          <CheckoutButton />
        </div>
      </div>
    </div>
  );
};

export default CartPreview;
