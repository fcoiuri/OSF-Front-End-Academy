import React, { useState, useEffects, useEffect } from "react";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleCart } from "../../Redux/reducer/handleCart";
import { addToCart } from "../../Redux/action";
import { deleteToCart } from "../../Redux/action";
import { NavLink } from "react-router-dom";

export const Cart = () => {
  const [totalPrice, setTotalPrice] = useState([]);
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  const delProduct = (product) => {
    dispatch(deleteToCart(product));
  };

  useEffect(() => {
    const price = state.map((product)=>{return product.price})
    setTotalPrice(price)
  });
  
  

  const product = (product) => {
    return (
      <div className="px-4 my-5 bg-white rounded-3" key={product.id}>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-2">
              <img
                src={product.image}
                alt={product.title}
                height="60%"
                width="60%"
              />
            </div>
            <div className="col-md-6 pl-3" style={{ display: "flex" }}>
              <h6 className="display-7 pl-3">{product.title}</h6>
              <button
                className="btn btn-outline-dark me-4 h-50 w-10 ml-3"
                onClick={() => delProduct(product)}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark me-4 h-50 w-10 "
                onClick={() => addProduct(product)}
              >
                <i className="fa fa-plus"></i>
              </button>
              <p className="lead font-weight-bold pl-3">
                {(product.qty * product.price).toFixed(2)}
              </p>
              <p className={`ml-3 font-weight-bold ${styles.quantity}`}>
                {product.qty}
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row justify-content-center">
            <h3 className="text-center">Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className={styles.checkout}>
            Proceed To Checkout
          </NavLink>
          {totalPrice}
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(product)}
      {state.length !== 0 && button()}
    </>
  );
};
