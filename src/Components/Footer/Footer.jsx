import React, { useState, useEffect } from "react";
import styles from "./Footer.module.css";
import { Year } from "../../_utils/time";
import { default as facebook } from "../../icons/facebook.svg";
import { default as google } from "../../icons/google+.svg";
import { default as twitter } from "../../icons/twitter.svg";
import { default as pinterest } from "../../icons/pinterest.svg";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

export const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  const _handleResize = () => {
    if (window.innerWidth < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", _handleResize);
  });

  return (
    <body className="d-flex flex-column">
      <footer className="page-footer font-small blue pt-4 mt-auto">
        <div className="container-fluid text-md-left">
          <div className="row">
            <div className="col-md-2 mt-md-0 mt-3">
              <div className={styles.rights}>
                <div>&copy; Copyright {Year()}</div>
                <div>All Rights Reserved</div>
                <br />
              </div>
              <h6 className="text-uppercase">Contact</h6>
              <div className={styles.contact}>
                <div>Headquarters: </div>
                <div>5600, Blvd. des Galeries, Bur 530</div>
                <p>Québec, Québec G2K 2H6</p>
                <p>
                  <a
                    className={styles.devices}
                    href="mailto:contact@osf-global.com"
                  >
                    contact@osf-global.com
                  </a>
                </p>
                <a className={styles.devices} href="tel:18885484344">
                  <div>+1 (888) 548-4344</div>
                </a>
              </div>
            </div>
            {!isMobile && (
              <React.Fragment>
                <div className="col-md-2 mt-md-0 mt-3">
                  <h6 className="text-uppercase">Categoriest</h6>
                  <div className={styles.categoriest}>
                    <Link
                      to="/alcohol"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Alcohol</p>
                    </Link>
                    <Link
                      to="/art"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Art</p>
                    </Link>
                    <Link
                      to="/books"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Books</p>
                    </Link>
                    <Link
                      to="/drink"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Drink</p>
                    </Link>
                    <Link
                      to="/electronics"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Electronics</p>
                    </Link>
                  </div>
                </div>

                <div className="col-md-2 mt-md-0 mt-3">
                  <div className={styles.categoriest}>
                    <br />
                    <Link
                      to="/home"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Home</p>
                    </Link>
                    <Link
                      to="/jewelry"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Jewelry</p>
                    </Link>
                    <Link
                      to="/kids-baby"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Kids & Baby</p>
                    </Link>
                    <Link
                      to="/mensfashion"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Men's Fashion</p>
                    </Link>
                    <Link
                      to="/mobile"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Mobile</p>
                    </Link>
                    <Link
                      to="/motorcycles"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Motorcycles</p>
                    </Link>
                    <Link
                      to="/movies"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Movies</p>
                    </Link>
                    <Link
                      to="/music"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Music</p>
                    </Link>
                  </div>
                </div>
                <div className="col-md-2 mt-md-0 mt-3">
                  <div className={styles.categoriest}>
                    <br />
                    <Link
                      to="/sport"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Sport</p>
                    </Link>
                    <Link
                      to="/toys"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Toys</p>
                    </Link>
                    <Link
                      to="/travel"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Travel</p>
                    </Link>
                    <Link
                      to="/womensfashion"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Women's Fashion</p>
                    </Link>
                  </div>
                </div>
                <div className="col-md-2 mt-md-0 mt-3">
                  <h6 className="text-uppercase">About</h6>
                  <div className={styles.categoriest}>
                    <Link
                      to="/about-us"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>About us</p>
                    </Link>
                    <Link
                      to="/delivery"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Delivery</p>
                    </Link>
                    <Link
                      to="/testimonials"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Testimonials</p>
                    </Link>
                    <Link
                      to="/contact"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <p>Contact</p>
                    </Link>
                  </div>
                </div>
                <div className="col-md-2 mt-md-0 mt-3 row">
                  <div className="col-md-3 mt-md-0 mt-3">
                    <h6>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.facebook.com"
                        role="button"
                        className={styles.followButton}
                      >
                        <img src={facebook} alt="Facebook logo" />
                      </a>
                    </h6>
                  </div>
                  <div className="col-md-3 mt-md-0 mt-3">
                    <h6>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://killedbygoogle.com"
                        role="button"
                        className={styles.followButton}
                      >
                        <img src={google} alt="Google+" />
                      </a>
                    </h6>
                  </div>
                  <div className="col-md-3 mt-md-0 mt-3">
                    <h6>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://twitter.com/"
                        role="button"
                        className={styles.followButton}
                      >
                        <img src={twitter} alt="Twitter logo" />
                      </a>
                    </h6>
                  </div>
                  <div className="col-md-3 mt-md-0 mt-3">
                    <h6>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://pinterest.com"
                        role="button"
                        className={styles.followButton}
                      >
                        <img src={pinterest} alt="Pinterest logo" />
                      </a>
                    </h6>
                  </div>
                </div>
              </React.Fragment>
            )}

            {isMobile && (
              <React.Fragment>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className={styles.aboutMobile}
                  >
                    Categoriest
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link
                      to="/alcohol"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <Dropdown.Item href="#/action-1">Alcohol</Dropdown.Item>
                    </Link>
                    <Link
                      to="/art"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <Dropdown.Item href="#/action-2">Art</Dropdown.Item>
                    </Link>
                    <Link
                      to="/books"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <Dropdown.Item href="#/action-3">Books</Dropdown.Item>
                    </Link>
                    <Link
                      to="/electronics"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <Dropdown.Item href="#/action-3">
                        Electronics
                      </Dropdown.Item>
                    </Link>
                    <Link
                      to="/drink"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <Dropdown.Item href="#/action-3">Drink</Dropdown.Item>
                    </Link>
                    <Link
                      to="/home"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <Dropdown.Item href="#/action-3">Home</Dropdown.Item>
                    </Link>
                    <Link
                      to="/jewelry"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <Dropdown.Item href="#/action-3">Jewelry</Dropdown.Item>
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className={styles.aboutMobile}
                  >
                    About
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link
                      to="/about-us"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <Dropdown.Item href="#/action-1">About us</Dropdown.Item>
                    </Link>
                    <Link
                      to="/delivery"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <Dropdown.Item href="#/action-2">Delivery</Dropdown.Item>
                    </Link>
                    <Link
                      to="/testimonials"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <Dropdown.Item href="#/action-3">
                        Testimonials
                      </Dropdown.Item>
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="mb-5 pb-5">
                  <span className="col-md-3 mt-md-0 mt-3">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://www.facebook.com"
                      role="button"
                      className={styles.followButton}
                    >
                      <img src={facebook} alt="Facebook logo" />
                    </a>
                  </span>
                  <span className="col-md-3 mt-md-0 mt-3">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://killedbygoogle.com"
                      role="button"
                      className={styles.followButton}
                    >
                      <img src={google} alt="Google+" />
                    </a>
                  </span>
                  <span className="col-md-3 mt-md-0 mt-3">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://twitter.com/"
                      role="button"
                      className={styles.followButton}
                    >
                      <img src={twitter} alt="Twitter logo" />
                    </a>
                  </span>
                  <span className="col-md-3 mt-md-0 mt-3 ">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://pinterest.com"
                      role="button"
                      className={styles.followButton}
                    >
                      <img src={pinterest} alt="Pinterest logo" />
                    </a>
                  </span>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </footer>
    </body>
  );
};
