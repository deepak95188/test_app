import React from 'react';

const Button = ({handleClick,color,label,backgroundColor}) => {
  return (
    <button onClick={()=>handleClick()} style={{color:color,backgroundColor:backgroundColor}} >
      {label}
    </button>
  );
}

export default Button;
