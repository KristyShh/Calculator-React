import { useState } from 'react';
import './App.css';

const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function AppCalculator() {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');
  const [displayValue, setDisplayValue] = useState('0');

  const handleNumberClick = (num) => {
    if (!operator) {
      setOperand1(prevOperand => prevOperand + num);
      setDisplayValue(prevDisplayValue => {
        if (prevDisplayValue === '0' || prevDisplayValue === '') {
          return num;
        } else {
          return prevDisplayValue + num;
        }
      });
    } else {
      setOperand2(prevOperand => prevOperand + num);
      setDisplayValue(prevDisplayValue => prevDisplayValue + num);
    }
  };

  const handleOperatorClick = (op) => {
    if (op === 'C') {
      setOperand1('');
      setOperand2('');
      setOperator('');
      setDisplayValue('0');
    } else if (op === '=') {
      if (operand1 && operand2 && operator) {
        let result;
        switch (operator) {
          case '+':
            result = parseInt(operand1) + parseInt(operand2);
            break;
          case '-':
            result = parseInt(operand1) - parseInt(operand2);
            break;
          default:
            return; 
        }
        setDisplayValue(result.toString());
        setOperand1(result.toString());
        setOperand2('');
        setOperator('');
      }
    } else if (op === '+' || op === '-') {
      setOperator(op);
      setDisplayValue(prevDisplayValue => prevDisplayValue + op); 
    }
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <div className="numbers">
          {NUMS.map((num) => (
            <button key={num} onClick={() => handleNumberClick(num)}>
              {num}
            </button>
          ))}
        </div>
        <div className="operators">
          <button onClick={() => handleOperatorClick('+')}>+</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>
          <button onClick={() => handleOperatorClick('=')}>=</button>
          <button onClick={() => handleOperatorClick('C')}>C</button>
        </div>
      </div>
    </div>
  );
}

export default AppCalculator;


