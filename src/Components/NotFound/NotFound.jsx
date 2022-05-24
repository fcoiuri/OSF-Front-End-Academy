import React, { useState } from "react";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.bg}>
      <div className={styles.title}>404</div>
      <div className={styles.container}>
        <div className="row">
          <div className={`col ${styles.ops}`}>Oops!</div>
          <div className={`col ${styles.notFound}`}>
            <div className={styles.titleNotFound}>
              Sorry, this page could not be found!
            </div>
            <div className={styles.descriptionNotFound}>
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </div>
            <div className={styles.descriptionNotFound}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </div>
            <div className={styles.homepage}>
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "#84bc22" }}
              >
                Go back to Homepage
              </Link>
            </div>
            <div className={styles.search}>Search our site</div>

            <div className={`col-md-9 ${styles.searchInput}`}>
              <div class="input-group">
                <input
                  className="form-control border-end-0 "
                  style={{ border: 0 }}
                  type="search"
                  id="example-search-input"
                  placeholder="SEARCH"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
                <Link to={`/${search}`} style={{ textDecoration: "none" }}>
                  <span class="input-group-append">
                    <button
                      class="btn btn-outline-secondary bg-white ms-n5"
                      type="button"
                      style={{ border: 0 }}
                    >
                      <i class="fa fa-search"></i>
                    </button>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
