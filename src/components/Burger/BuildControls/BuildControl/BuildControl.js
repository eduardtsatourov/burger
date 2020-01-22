import React from "react";
import classes from "./BuildControl.module.css";

export default function BuildControl(props) {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        disabled={props.ings[props.type] <= 0}
        onClick={props.removed}
        className={classes.Less}
      >
        Less
      </button>
      <button onClick={props.added} className={classes.More}>
        More
      </button>
    </div>
  );
}
