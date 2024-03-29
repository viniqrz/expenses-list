import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = function(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = function(e) {
    setEnteredTitle(e.target.value);
  }

  const amountChangeHandler = function(e) {
    setEnteredAmount(e.target.value);
  }

  const dateChangeHandler = function(e) {
    setEnteredDate(e.target.value);
  }

  const submitHandler = function(e) {
    e.preventDefault();

    const expenseData = {
      id: Math.random()+'',
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}></input>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date'value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}></input>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={props.onCloseForm} type="button">Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;