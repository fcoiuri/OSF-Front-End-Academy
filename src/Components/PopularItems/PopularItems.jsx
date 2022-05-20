import React from "react";
import ProductTile from "../ProductTile";
import styles from './PopularItems.module.css';
import products from '../../data/products.json';


export default function PopularItems() {
    const showProducts = products.map((data) => {
        return (
            <ProductTile key={data.id} title={data.title}
                price={data.price} image={data.image} />
        )

    })
    return (
        <div className={styles.showItems}>
            <div className={styles.title}>
                Popular Items
            </div>
            <div className="card-deck">
                {showProducts}
            </div>
        </div>
    )
}
