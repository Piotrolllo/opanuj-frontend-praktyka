import React, { useState, Dispatch, SetStateAction } from 'react';

interface InputProps {
  num: number;
  setNum: Dispatch<SetStateAction<number>>;
}

const Input: React.FC<InputProps> = ({ setNum, num }) => {
  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={num}
      onChange={(e) => setNum(parseFloat(e.target.value))}
    />
  );
};

export default Input;
