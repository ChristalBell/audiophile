// import React from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { minusOne, addOne } from "../../store/itemCountSlice";
// import { lowerTotalPrice, raiseTotalPrice } from "../../store/totalPriceSlice";
// import { Button } from "@mui/base";

// const SingleProductDisplay = (item, itemCount, cartItems) => {
//   // const { cartItems } = useSelector((state) => state.cartItems);
//   // const { itemCount } = useSelector((state) => state.itemCount);
//   const dispatch = useDispatch();

//   console.log(item);
//   console.log(cartItems);
//   console.log(itemCount);

//   return (
//     <div
//       className="single-product-display"
//       style={{
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       <div className="item-display" style={{ marginRight: "2rem" }}>
//         {/* <img
//           src=""
//           alt={cartItem.item.image.mobile}
//           style={{ height: "15vh", width: "15vw" }}
//         /> */}
//         <p>{item.name} </p>
//         <p
//           style={{
//             color: " hsl(0,0%,92%)",
//             fontWeight: "bold",
//           }}
//         >
//           ${cartItems[0].price}
//         </p>
//       </div>

//       <div
//         className="counter-button"
//         style={{
//           display: "flex",
//           backgroundColor: "hsl(0, 0%, 98%)",
//         }}
//       >
//         <Button
//           onClick={() => {
//             dispatch(minusOne());
//             dispatch(lowerTotalPrice(cartItems[0].price));
//           }}
//         >
//           -
//         </Button>
//         <p>{itemCount}</p>
//         <Button
//           onClick={() => {
//             dispatch(addOne());
//             dispatch(raiseTotalPrice(cartItems[0].price));
//           }}
//         >
//           +
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default SingleProductDisplay;
