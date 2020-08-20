import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        id={name}
        name={name}
        type='text'
        className={`form-contrl ${error ? "is-invalid" : "is-valid"}`}
      />
      {error && <span className='invalid-feedback'>{error}</span>}
    </div>
  );
};

export default Input;
