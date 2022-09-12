import React from "react";

const Select = (props) => {
  return (
    <select
      className={`select_field ${props.className}`}
      aria-label="Default select example"
      value={props.value}
      onChange={props.onChange}
    >
      {props.children}
    </select>
  );
};

export default Select;
