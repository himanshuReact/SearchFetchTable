import React, { useState } from "react";

const Input = ({ handleInput, handleFetch }) => {
  return (
    <div>
      <input onKeyUp={handleInput} type="text" />
      <button onClick={handleFetch}>fetch</button>
    </div>
  );
};

export default Input;
