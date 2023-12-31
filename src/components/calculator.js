import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [initState, setInitState] = useState({
    total: 0,
    operation: null,
    next: null,
  });
  const { total, operation, next } = initState;
  const clickfunc = (e) => {
    const result = e.target.value;
    setInitState((prevState) => calculate(prevState, result));
  };
  const result = `${total || ''}${operation || ''}${next || ''}`;

  return (
    <div className="container">
      <button type="button" className="button">
        {result}
      </button>
      <div className="row">
        <input type="button" value="AC" onClick={clickfunc} />
        <input type="button" value="+/-" onClick={clickfunc} />
        <input type="button" value="%" onClick={clickfunc} />
        <input className="orange" type="button" value="÷" onClick={clickfunc} />
      </div>
      <div className="row">
        <input type="button" value="7" onClick={clickfunc} />
        <input type="button" value="8" onClick={clickfunc} />
        <input type="button" value="9" onClick={clickfunc} />
        <input className="orange" type="button" value="x" onClick={clickfunc} />
      </div>
      <div className="row">
        <input type="button" value="4" onClick={clickfunc} />
        <input type="button" value="5" onClick={clickfunc} />
        <input type="button" value="6" onClick={clickfunc} />
        <input className="orange" type="button" value="-" onClick={clickfunc} />
      </div>
      <div className="row">
        <input type="button" value="1" onClick={clickfunc} />
        <input type="button" value="2" onClick={clickfunc} />
        <input type="button" value="3" onClick={clickfunc} />
        <input className="orange" type="button" value="+" onClick={clickfunc} />
      </div>
      <div className="row">
        <input className="span" type="button" value="0" onClick={clickfunc} />
        <input type="button" value="." onClick={clickfunc} />
        <input className="orange" type="button" value="=" onClick={clickfunc} />
      </div>
    </div>
  );
};

export default Calculator;
