import React, { useState, useEffect } from "react";
import styles from "./ProductTile.module.css";
import { default as heart } from "../../icons/heart.svg";
import { default as plus } from "../../icons/plus.svg";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/action";
import { addToWishlist } from "../../Redux/action";

export const ProductTile = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(props.product);
  });

  const addProductCart = (product) => {
    dispatch(addToCart(product));
  };

  const addtoWishlist = (product) => {
    dispatch(addToWishlist(product));
  };
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 d-flex align-self-stretch">
      <div className="card shadow-sm mb-3">
        <img src={props.image} className="card-img-top" alt="Product" />
        <div className={styles.cardHover}>
          <div className={styles.cardHoverButtons}>
            <button type="button" onClick={()=>addProductCart(product)}>
              <img src={plus} alt="Add to Cart" />
            </button>
            <button type="button" onClick={()=>addtoWishlist(product)}>
              <img src={heart} alt="Add to Wishlist" />
            </button>
          </div>
            <button className={styles.seeProduct} type="button" onClick={() => navigate(`/products/${props.id}`)}>
             See Product
            </button>
        </div>
        <div className="card-body">
          <div className={styles.cardTitle}>
            <h6 className="card-title">{props.title}</h6>
          </div>
          <div className={styles.cardSubtitle}>
            <h6 className="card-subtitle mb-2 text-muted">$ {props.price}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
