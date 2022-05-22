import React from "react";
import styles from './ProductTile.module.css';
import { default as heart } from '../../icons/heart.svg';
import { default as plus } from '../../icons/plus.svg';

export default function ProductTile(props) {
    function addtoCart () {
        console.log("Added to the cart")
    }
    function addtoWishlist () {
        console.log("Added to the Wishlist")
    }
    return (
        <div class="col-sm-12 col-md-6 col-lg-3 d-flex align-self-stretch">
            <div class="card shadow-sm mb-3">
                <img src={props.image} class="card-img-top" alt="Product" />
                <div className={styles.cardHover}>
                    <div className={styles.cardHoverButtons}>
                        <button type="button" onClick={addtoCart}>
                            <img src={plus} alt="Add to Cart" />
                        </button>
                        <button type="button" onClick={addtoWishlist}>
                            <img src={heart} alt="Add to Wishlist" />
                        </button>
                    </div>
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

    )
}