import React, { useState } from 'react';
import { add, subtract, multiply, divide } from './functions';
import Input from './Input';
import Button from './Button';

const App = () => {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const doWork = (func: (a: number, b: number) => number) => {
    setResult(func(numA, numB));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <Input setNum={setNumA} num={numA} />
        <Input setNum={setNumB} num={numB} />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button func={add} setResult={setResult} numA={numA} numB={numB}>
          <span>+</span>
        </Button>
        {/* <Button func={doWork(subtract)}>
          <span>-</span>
        </Button>
        <Button func={doWork(multiply)}>
          <span>*</span>
        </Button>
        <Button func={doWork(divide)}>
          <span>/</span>
        </Button> */}
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
