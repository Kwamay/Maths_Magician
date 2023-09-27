import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const initialDisplay = {
    total: '',
    next: null,
    operation: null,
  };
  const [result, setResult] = useState(initialDisplay);

  const calculate = () => {
  };

  const handleClick = () => {
    // const buttonName = e.target.textContent;
    // setResult(calculate(buttonName));
    setResult(calculate());
  };

  return (
    <div className="container">
      {/* <Button data={result.next || result.total || '0'} /> */}
      <button type="button" className="button">
        {result.next || result.total || '0'}
        {' '}
      </button>
      <div className="row">
        <button type="button" onClick={handleClick}>
          AC
        </button>
        <button type="button" onClick={handleClick}>
          +/-
        </button>
        <button type="button" onClick={handleClick}>
          %
        </button>
        <button type="button" onClick={handleClick}>
          ÷
        </button>
      </div>
      <div className="row">
        <button type="button" onClick={handleClick}>
          7
        </button>
        <button type="button" onClick={handleClick}>
          8
        </button>
        <button type="button" onClick={handleClick}>
          9
        </button>
        <button type="button" onClick={handleClick}>
          x
        </button>
      </div>
      <div className="row">
        <button type="button" onClick={handleClick}>
          4
        </button>
        <button type="button" onClick={handleClick}>
          5
        </button>
        <button type="button" onClick={handleClick}>
          6
        </button>
        <button type="button" onClick={handleClick}>
          -
        </button>
      </div>
      <div className="row">
        <button type="button" onClick={handleClick}>
          1
        </button>
        <button type="button" onClick={handleClick}>
          2
        </button>
        <button type="button" onClick={handleClick}>
          3
        </button>
        <button type="button" onClick={handleClick}>
          +
        </button>
      </div>
      <div className="row">
        <button type="button" onClick={handleClick}>
          0
        </button>
        <button type="button" onClick={handleClick}>
          .
        </button>
        <button type="button" onClick={handleClick}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
