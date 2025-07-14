import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import formatCurrency from "./formatCurrency";
import { useShoppingCart } from "../Context/shoppingCartContext";

const Item = ({ id, price, name, imgUrl }) => {
  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemFormCart,
  } = useShoppingCart();
  const quantity = getItemsQuantity(id);
  
  
  return (
    <>
      <div className="container d-flex justify-content-around">
        <div
          className="card d-flex justify-content-between mx-5 my-5 "
          style={{ width: "30rem" }}
        >
          <img
            src={imgUrl}
            className="card-img-top "
            alt="..."
            style={{ height: "250px", objectFit: "cover" }}
          />
          <div className="card-body">
            <div className="card-title d-flex justify-content-between align-items-baseline ">
              <span className="fs-5">{name}</span>
              <span className="text-muted me-2">{formatCurrency(price)}</span>
            </div>

            {quantity === 0 ? (
              <div class="d-grid ">
                <button
                  class="btn btn-primary mt-auto"
                  type="button"
                  onClick={() => increaseCartQuantity(id)}
                >
                  Add to Cart
                </button>
              </div>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: "0.5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: "0.5rem" }}
                >
                  <Button onClick={() => decreaseCartQuantity(id)}>-</Button>

                  <span className="fs-3">{quantity} in cart</span>
                  <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeItemFormCart(id)}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
