import React from 'react';

const Input = ({name,value,outline,handleChange}) => {
  return (
    <input value={value} type="number" name={name} onChange={handleChange}  style={{outline:outline}}   />
  );
}

export default Input;
