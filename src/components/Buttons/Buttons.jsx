/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Buttons = ({ property1, className, divClassName, text = "Button" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <button
      className={`buttons ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`button ${divClassName}`}>{text}</div>
    </button>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "hover",
        };
    }
  }

  if (state.property1 === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "primary-default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "primary-hover",
        };
    }
  }

  if (state.property1 === "primary-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "primary-default",
        };
    }
  }

  if (state.property1 === "danger-default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "danger-hover",
        };
    }
  }

  if (state.property1 === "danger-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "danger-default",
        };
    }
  }

  if (state.property1 === "operation-default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "operation-hover",
        };
    }
  }

  if (state.property1 === "operation-hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "operation-default",
        };
    }
  }

  return state;
}

Buttons.propTypes = {
  property1: PropTypes.oneOf([
    "primary-default",
    "danger-disable",
    "primary-click",
    "click",
    "default",
    "danger-click",
    "operation-hover",
    "operation-default",
    "operation-disable",
    "primary-hover",
    "operation-click",
    "disabled",
    "hover",
    "primary-disable",
    "danger-default",
    "danger-hover",
  ]),
  text: PropTypes.string,
};
