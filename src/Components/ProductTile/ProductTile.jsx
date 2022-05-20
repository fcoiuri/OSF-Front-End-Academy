import React from "react";
import styles from './ProductTile.module.css';
import { default as heart } from '../../icons/heart.svg';
import { default as plus } from '../../icons/plus.svg';

export default function ProductTile(props) {
    return (
        <div className={styles.card}>
            <div className="card" style={{ width: "18rem"}}>
                <img src={props.image} className="card-img-top" alt="Product Image" />
                <div className={styles.cardHover}>
                    <div className={styles.cardHoverButtons}>
                        <button type="button">
                            <img src={plus} alt="Add to Cart" />
                        </button>
                        <button type="button">
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
            <br />
        </div>
    )
}

//Kristina Dam Oak Table With White Marble Top
//$ 799.55