/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { OcticonTrash244 } from "../../icons/OcticonTrash244";
import "./style.css";

export const IconButton = ({ property1, className, icon = <OcticonTrash244 className="octicon-trash" /> }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "clear-default",
  });

  return (
    <div
      className={`icon-button ${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {icon}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "clear-hover",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "clear-default",
      };
  }

  return state;
}

IconButton.propTypes = {
  property1: PropTypes.oneOf(["clear-default", "clear-hover", "clear-click"]),
};
