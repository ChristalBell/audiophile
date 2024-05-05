import React from "react";
import data from "../../data.json";
import ClearCartButton from "../buttons/ClearCartButton";
import CheckoutButton from "../buttons/CheckoutButton";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { minusOne, addOne } from "../../store/itemCountSlice";
import { lowerTotalPrice, raiseTotalPrice } from "../../store/totalPriceSlice";

const CartPreview = () => {
  // const { cartCount } = useSelector((state) => state.cartCount);
  // const { cartItemCount } = useSelector((state) => state.cartItemCount);
  const { cartItems } = useSelector((state) => state.cartItems);
  const { totalPrice } = useSelector((state) => state.totalPrice);
  const { itemCount } = useSelector((state) => state.itemCount);
  const dispatch = useDispatch();

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
          Final Cart Count
          <span style={{ color: "hsl(24, 66%, 55%)" }}>(some number)</span>
        </p>
        <ClearCartButton />
      </div>

      <div className="working-div">
        {cartItems.length > 1 ? (
          cartItems.map((cartItem) => {
            return (
              <div
                className="item-display"
                style={{ display: "flex", alignItems: "center" }}
              >
                {cartItems.map((item) => {
                  console.log(item);
                  return (
                    <div
                      className="mini-container"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src=""
                        alt={item.name}
                        style={{ height: "15vh", width: "15vw" }}
                      />
                      <div style={{ marginRight: "2rem" }}>
                        <p>{item.name} </p>
                        <p
                          style={{
                            color: " hsl(0,0%,92%)",
                            fontWeight: "bold",
                          }}
                        >
                          ${item.price}
                        </p>
                      </div>

                      <div
                        className="counter-button"
                        style={{
                          display: "flex",
                          backgroundColor: "hsl(0, 0%, 98%)",
                        }}
                      >
                        <Button
                          onClick={() => {
                            dispatch(minusOne());
                            dispatch(lowerTotalPrice(item.price));
                          }}
                        >
                          -
                        </Button>
                        <p>{itemCount}</p>
                        <Button
                          onClick={() => {
                            dispatch(addOne());
                            dispatch(raiseTotalPrice(item.price));
                          }}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })
        ) : (
          <div>
            <p>hello world</p>
          </div>
        )}
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
          <p> total count {itemCount} </p>
        </div>

        <div style={{ alignSelf: "center" }}>
          <CheckoutButton />
        </div>
      </div>
    </div>
  );
};

export default CartPreview;
