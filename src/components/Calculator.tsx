import React, { ChangeEvent, useEffect, useState } from 'react';
import './Calculator.scss';
import { ReactComponent as Dollar } from '../data/icon-dollar.svg';
import { ReactComponent as Person } from '../data/icon-person.svg';

const Calculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [people, setPeople] = useState('');
  const [customTipsInput, setCustomTipsInput] = useState('');
  const [tipsPerPerson, setTipsPerPerson] = useState(0);
  const [amountPerPerson, setAmountPerPerson] = useState(0);
  const [error, setError] = useState('');

  const tips5 = () => {
    const amount = ((Number(billAmount) + (Number(billAmount) / 100) * 5)) / Number(people);
    setAmountPerPerson(amount);
    const tips = ((Number(billAmount) / 100) * 5) / Number(people);
    setTipsPerPerson(tips);
  };

  const tips10 = () => {
    const amount = ((Number(billAmount) + (Number(billAmount) / 100) * 10)) / Number(people);
    setAmountPerPerson(amount);
    const tips = ((Number(billAmount) / 100) * 10) / Number(people);
    setTipsPerPerson(tips);
  };

  const tips15 = () => {
    const amount = ((Number(billAmount) + (Number(billAmount) / 100) * 15)) / Number(people);
    setAmountPerPerson(amount);
    const tips = ((Number(billAmount) / 100) * 15) / Number(people);
    setTipsPerPerson(tips);
  };

  const tips25 = () => {
    const amount = ((Number(billAmount) + (Number(billAmount) / 100) * 25)) / Number(people);
    setAmountPerPerson(amount);
    const tips = ((Number(billAmount) / 100) * 25) / Number(people);
    setTipsPerPerson(tips);
  };

  const tips50 = () => {
    const amount = ((Number(billAmount) + (Number(billAmount) / 100) * 50)) / Number(people);
    setAmountPerPerson(amount);
    const tips = ((Number(billAmount) / 100) * 50) / Number(people);
    setTipsPerPerson(tips);
  };

  const customTips = (e:ChangeEvent<HTMLInputElement>) => {
    setCustomTipsInput(e.target.value);
    const amount = ((Number(billAmount) + (Number(billAmount) / 100) * Number(customTipsInput))) / Number(people);
    console.log(amount);
    setAmountPerPerson(amount);
    const tips = ((Number(billAmount) / 100) * Number(customTipsInput)) / Number(people);
    setTipsPerPerson(tips);
  };

  const formValidation = () => {
    let message = '';

    if (Number(people) <= 0) {
      message = "Can't be zero";
    }
    setError(message);
  };

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setPeople(e.target.value);
    formValidation();
  };

  useEffect(() => {
    if (Number(people) !== 0) {
      formValidation();
    }
  }, [people]);

  const reset = () => {
    setBillAmount('');
    setPeople('');
    setTipsPerPerson(0);
    setAmountPerPerson(0);
  };

  return (

    <div className="calculator_wrapper">
      <div className="left_side_wrapper">

        <div className="bill_wrapper">
          <h6 className="heading1">Bill</h6>
          <input
            type="number"
            className="input"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
            placeholder="0"
          />
          <Dollar className="dollar" />
        </div>

        <div>
          <h6 className="heading1">Select tip %</h6>
          <div className="button_wrapper">
            <button className="tip_button" onClick={tips5}>5%</button>
            <button className="tip_button" onClick={tips10}>10%</button>
            <button className="tip_button" onClick={tips15}>15%</button>
            <button className="tip_button" onClick={tips25}>25%</button>
            <button className="tip_button" onClick={tips50}>50%</button>
            <input
              className="select_input"
              type="text"
              placeholder="Custom"
              value={customTipsInput}
              onChange={customTips}
            />
          </div>

          <div className="people_counter_wrapper">
            <div className="error_wrapper">
              <h6 className="heading1">Number of people</h6>
              <span className="error">{error}</span>
            </div>
            <input
              className="input"
              type="number"
              value={people}
              onChange={onChangeHandler}
              placeholder="0"
            />
            <Person className="person" />
          </div>
        </div>

      </div>

      <div className="result_wrapper">
        <div className="tip_ammount_wrapper">
          <div>
            <h6 className="heading2">Tip Amount</h6>
            <h6 className="heading3">/ person</h6>
          </div>
          <div className="amount">
            {`$${tipsPerPerson.toFixed(2)}`}
          </div>
        </div>
        <div className="total_amount_wrapper">
          <div>
            <h6 className="heading2">Total</h6>
            <h6 className="heading3">/ person</h6>
          </div>
          <div className="amount">
            {`$${amountPerPerson.toFixed(2)}`}
          </div>
        </div>
        <button
          className="reset_button"
          onClick={reset}
        >
          RESET
        </button>
      </div>
    </div>

  );
};
export default Calculator;
