import React, { useState } from 'react';
import './calculator.css';
// import calculate from '../logic/calculate';
import operate from '../logic/operate';

const Calculator = () => {
  const initialDisplay = {
    total: '',
    next: '',
    operation: '',
  };
  const [result, setResult] = useState(initialDisplay);

  const handleClick = (buttonValue) => {
    if (Number.isNaN(+buttonValue)) {
      if (buttonValue === '=') {
        // Calculate and update the result when the "=" button is clicked
        setResult({
          ...result, next: result.total, total: '', operation: '',
        });
      } else if (buttonValue === 'AC') {
        setResult({ operation: '', next: '', total: '' });
      } else {
        // operator
        setResult({ ...result, operation: buttonValue });
      }
    } else if (result.next !== '' && result.operation !== '') {
      const t = operate(result.next, buttonValue, result.operation);
      setResult({
        ...result, total: t, next: buttonValue, operation: '',
      });
    } else if (result.operation) {
      setResult({ ...result, next: buttonValue });
    } else {
      setResult({ ...result, next: `${result.next}${buttonValue}` });
    }
  };

  return (
    <div className="container">
      <button type="button" className="button">
        {result.next || result.total || '0'}
        {' '}
      </button>
      <div className="row">
        <button type="button" onClick={() => handleClick('AC')}>
          AC
        </button>
        <button type="button" onClick={() => handleClick('+/-')}>
          +/-
        </button>
        <button type="button" onClick={() => handleClick('%')}>
          %
        </button>
        <button type="button" onClick={() => handleClick('/')}>
          ÷
        </button>
      </div>
      <div className="row">
        <button type="button" onClick={() => handleClick('7')}>
          7
        </button>
        <button type="button" onClick={() => handleClick('8')}>
          8
        </button>
        <button type="button" onClick={() => handleClick('9')}>
          9
        </button>
        <button type="button" onClick={() => handleClick('x')}>
          x
        </button>
      </div>
      <div className="row">
        <button type="button" onClick={() => handleClick('4')}>
          4
        </button>
        <button type="button" onClick={() => handleClick('5')}>
          5
        </button>
        <button type="button" onClick={() => handleClick('6')}>
          6
        </button>
        <button type="button" onClick={() => handleClick('-')}>
          -
        </button>
      </div>
      <div className="row">
        <button type="button" onClick={() => handleClick('1')}>
          1
        </button>
        <button type="button" onClick={() => handleClick('2')}>
          2
        </button>
        <button type="button" onClick={() => handleClick('3')}>
          3
        </button>
        <button type="button" onClick={() => handleClick('+')}>
          +
        </button>
      </div>
      <div className="row">
        <button type="button" onClick={() => handleClick('0')}>
          0
        </button>
        <button type="button" onClick={() => handleClick('.')}>
          .
        </button>
        <button type="button" onClick={() => handleClick('=')}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
