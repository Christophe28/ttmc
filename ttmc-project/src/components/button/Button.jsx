import React from "react";

function Button({ value, onClick, className }) {
  return (
    <>
      <button className={className} onClick={onClick} >
        {value}
      </button>
    </>
  );
}

export default Button;
