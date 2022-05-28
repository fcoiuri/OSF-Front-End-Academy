import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <div>
      <Link to="/" style={{ textDecoration: "none", color: "#84bc22" }}>
        Home
      </Link>
      &#160; / &#160; {props.local}
    </div>
  );
}
