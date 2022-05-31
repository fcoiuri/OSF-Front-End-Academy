import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import { NavLink  } from 'react-router-dom';

export const Navigation = (props) => {

  return (
    <div>
      <NavLink to="/" style={{ textDecoration: "none", color: "#84bc22" }}>
        Home
      </NavLink>
      {!props.secondLocal && (
        <React.Fragment>&#160; / &#160; {props.local} &#160;</React.Fragment>
      )}

      {props.secondLocal && (
        <React.Fragment>
           &#160; / &#160;
          <NavLink to={-1} style={{ textDecoration: "none", color: "#84bc22" }}>
          {props.local} &#160;
          </NavLink >
          / &#160; {props.secondLocal.substring(0,15)}
        </React.Fragment>
      )}
    </div>
  );
};
