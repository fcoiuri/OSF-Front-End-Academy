import React from "react";
import styles from './Footer.module.css';
import { Year } from "../../_utils/time";
import { default as facebook } from '../../icons/facebook.svg';
import { default as google } from '../../icons/google+.svg';
import { default as twitter } from '../../icons/twitter.svg';
import { default as pinterest } from '../../icons/pinterest.svg';

export default function Appbar() {
    /*min-vh-100*/
    return (   
        <body className="d-flex flex-column">
            <footer className="page-footer font-small blue pt-4 mt-auto">
                <div className="container-fluid text-md-left">
                    <div className="row">
                        <div className="col-md-2 mt-md-0 mt-3">
                            <div className={styles.rights}>

                                <div>&copy; Copyright {Year()}</div>
                                <div>All Rights Reserved</div><br />
                            </div>
                            <h6 className="text-uppercase">Contact</h6>
                            <div className={styles.contact}>
                                <div>Headquarters: </div>
                                <div>5600, Blvd. des Galeries, Bur 530</div>
                                <p>Québec, Québec G2K 2H6</p>
                                <p><a href="mailto:contact@osf-global.com">contact@osf-global.com</a></p>
                                <div>+1 (888) 548-4344</div>
                            </div>
                        </div>
                        <div className="col-md-2 mt-md-0 mt-3">
                            <h6 className="text-uppercase">Categoriest</h6>
                            <div className={styles.categoriest}>

                                <p>Alcohol</p>
                                <p>Art</p>
                                <p>Books</p>
                                <p>Drink</p>
                                <p>Electronics</p>
                            </div>
                        </div>
                        <div className="col-md-2 mt-md-0 mt-3">
                            <div className={styles.categoriest}>
                                <br /><p>Home</p>
                                <p>Jewelry</p>
                                <p>Kids & Baby</p>
                                <p>Men's Fashion</p>
                                <p>Mobile</p>
                                <p>Motorcycles</p>
                                <p>Movies</p>
                                <p>Music</p>
                            </div>
                        </div>
                        <div className="col-md-2 mt-md-0 mt-3">
                            <div className={styles.categoriest}>
                                <br /><p>Sport</p>
                                <p>Toys</p>
                                <p>Travel</p>
                                <p>Women's Fashion</p>
                            </div>
                        </div>
                        <div className="col-md-2 mt-md-0 mt-3">
                            <h6 className="text-uppercase">About</h6>
                            <div className={styles.categoriest}>
                                <p>About us</p>
                                <p>Delivery</p>
                                <p>Testimonials</p>
                                <p>Contact</p>
                            </div>
                        </div>
                        <div className="col-md-2 mt-md-0 mt-3 row">
                            <div className="col-md-3 mt-md-0 mt-3">
                                <h6>
                                    <img src={facebook} />
                                </h6>
                            </div>
                            <div className="col-md-3 mt-md-0 mt-3">
                                <h6>
                                    <img src={google} />
                                </h6>
                            </div>
                            <div className="col-md-3 mt-md-0 mt-3">
                                <h6>
                                    <img src={twitter} />
                                </h6>
                            </div>
                            <div className="col-md-3 mt-md-0 mt-3">
                                <h6>
                                    <img src={pinterest} />
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </body>
    )
}
