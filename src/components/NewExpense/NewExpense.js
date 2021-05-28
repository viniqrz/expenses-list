import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm.js';

import './NewExpense.css';

const NewExpense = function(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData);
  }

  const startEditingHandler = function() {
    setIsEditing(true);
  }

  const stopEditingHandler = function() {
    setIsEditing(false);
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onCloseForm={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
}

export default NewExpense;