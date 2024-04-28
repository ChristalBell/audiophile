import React from "react";
import data from "../../data.json";
import ItemCounter from "./ItemCounter";
import AddToCartButton from "../buttons/AddToCartButton";

const ProductDetail = (props) => {
  const itemName = props.match.params.name;
  let item = {};
  // const boxItems = [];  this is for the in the box

  data.map((product) => {
    if (product.slug === itemName) {
      item = product;
    }

    return product;
  });

  // data.forEach((item) => {
  //   if (item.includes === item.name) {
  //     boxItems.push(item);
  //   }
  // });
  return (
    <div>
      <div className="top" style={{ display: "flex" }}>
        <div className="product-image">
          <img src={item.image.mobile} alt={item.name} />
        </div>

        <div className="product-info">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <h5>${item.price}</h5>

          <div
            className="product-counter"
            style={{ display: "flex", alignItems: "center" }}
          >
            <ItemCounter />

            <AddToCartButton />
          </div>
        </div>
      </div>

      <div className="bottom" style={{ display: "flex" }}>
        <div className="features">
          <h2>Features</h2>
          <p>{item.features}</p>{" "}
        </div>

        <div className="in-box">
          <h2>In The Box</h2>
          <ul>
            {item.includes.map((accessory) => {
              return (
                <li key={item.id + Math.random()}>
                  <span
                    style={{ color: " hsl(24, 66%, 55%)", fontWeight: "bold" }}
                  >
                    {accessory.quantity}x{" "}
                  </span>
                  {accessory.item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* <>Gallery Component </>
      <>You May Also Like  (recommended) component</>
      <> category Card component </>
      <> ad component </> */}
    </div>
  );
};

export default ProductDetail;
