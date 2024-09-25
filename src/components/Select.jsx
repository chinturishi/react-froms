import React from "react";
import PropTypes from "prop-types";

const Select = ({
  id,
  lable,
  name,
  value,
  Onchange,
  options,
  error,
  defaultOption,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{lable}</label>
      <select id={id} name={name} value={value} onChange={Onchange}>
        {defaultOption && (
          <option hidden value="">
            {defaultOption}
          </option>
        )}
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </div>
  );
};

export default Select;
