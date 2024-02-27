import React, { Dispatch, SetStateAction } from 'react';

interface ButtonProps {
  func: (a: number, b: number) => number;
  setResult: Dispatch<SetStateAction<number>>;
  children: any;
  numA: number;
  numB: number;
}

const Input: React.FC<ButtonProps> = ({
  func,
  setResult,
  children,
  numA,
  numB,
}) => {
  function handleOperationAndSetState() {
    setResult(func(numA, numB));
  }

  return (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={() => handleOperationAndSetState()}
    >
      {children}
    </button>
  );
};

export default Input;
