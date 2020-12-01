import React, { useEffect, useState } from 'react';
import './style/style.css';

function Calculator({ setPage }) {
  useEffect(() => {
    setPage('/calculator');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [selectedOperator, setSelectedOperator] = useState('');
  const [prevNumber, setPrevNumber] = useState('');
  const [currNumber, setCurrNumber] = useState('');

  const calculate = (argument) => {
    let res = () => {
      switch (selectedOperator) {
        case '+':
          return parseFloat(prevNumber) + parseFloat(currNumber);
        case '-':
          return parseFloat(prevNumber) - parseFloat(currNumber);
        case '*':
          return parseFloat(prevNumber) * parseFloat(currNumber);
        case '/':
          return parseFloat(prevNumber) / parseFloat(currNumber);
        default:
          console.warn('DEV ERROR - evaluate code');
          break;
      }
    };

    if (argument === 'bypass') {
      setPrevNumber(res().toFixed(2));
      setCurrNumber('');
    } else {
      setSelectedOperator('');
      setPrevNumber('');
      setCurrNumber(res().toFixed(2));
    }
  };

  const handleNum = (num) => {
    let newNum = `${currNumber}`;
    newNum += num;
    setCurrNumber(newNum);
  };

  const handleOpr = (opr) => {
    if (selectedOperator === '') {
      setSelectedOperator(opr);
      setPrevNumber(currNumber);
      setCurrNumber('');
    } else {
      calculate('bypass');
      setSelectedOperator(opr);
    }
  };

  const handleClearAll = () => {
    setSelectedOperator('');
    setPrevNumber('');
    setCurrNumber('');
  };

  const handleClearOne = () => {
    let newNum = `${currNumber}`;
    newNum = newNum.slice(0, newNum.length - 1);
    setCurrNumber(newNum);
  };

  const handleNegative = () => {
    let newNum = `${currNumber}`;
    newNum.charAt(0) !== '-' ? (newNum = `-${newNum}`) : (newNum = newNum.slice(1));
    setCurrNumber(newNum);
  };

  return (
    <div className='Calculator'>
      <div className='display'>
        <input className='prev' value={prevNumber} readOnly />
        <input className='opr' value={selectedOperator} readOnly />
        <input className='curr' value={currNumber} readOnly />
      </div>

      <table>
        <tbody>
          <tr>
            <td>
              <button className='other' onClick={handleNegative}>
                +/-
              </button>
            </td>
            <td>
              <button className='other' onClick={handleClearAll}>
                AC
              </button>
            </td>
            <td>
              <button className='other' onClick={handleClearOne}>
                ←
              </button>
            </td>
            <td>
              <button
                className='operator'
                onClick={() => {
                  handleOpr('/');
                }}>
                &divide;
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className='numpad'
                onClick={() => {
                  handleNum('7');
                }}>
                7
              </button>
            </td>
            <td>
              <button
                className='numpad'
                onClick={() => {
                  handleNum('8');
                }}>
                8
              </button>
            </td>
            <td>
              <button
                className='numpad'
                onClick={() => {
                  handleNum('9');
                }}>
                9
              </button>
            </td>
            <td>
              <button
                className='operator'
                onClick={() => {
                  handleOpr('*');
                }}>
                &times;
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className='numpad'
                onClick={() => {
                  handleNum('4');
                }}>
                4
              </button>
            </td>
            <td>
              <button
                className='numpad'
                onClick={() => {
                  handleNum('5');
                }}>
                5
              </button>
            </td>
            <td>
              <button
                className='numpad'
                onClick={() => {
                  handleNum('6');
                }}>
                6
              </button>
            </td>
            <td>
              <button
                className='operator'
                onClick={() => {
                  handleOpr('-');
                }}>
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className='numpad'
                onClick={() => {
                  handleNum('1');
                }}>
                1
              </button>
            </td>
            <td>
              <button
                className='numpad'
                onClick={() => {
                  handleNum('2');
                }}>
                2
              </button>
            </td>
            <td>
              <button
                className='numpad'
                onClick={() => {
                  handleNum('3');
                }}>
                3
              </button>
            </td>
            <td>
              <button
                className='operator'
                onClick={() => {
                  handleOpr('+');
                }}>
                +
              </button>
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <button
                className='numpad'
                onClick={() => {
                  handleNum('0');
                }}>
                0
              </button>
            </td>
            <td>
              <button
                className='other'
                style={{ fontWeight: '900' }}
                onClick={() => {
                  handleNum('.');
                }}>
                &middot;
              </button>
            </td>
            <td>
              <button className='operator' onClick={calculate}>
                =
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
