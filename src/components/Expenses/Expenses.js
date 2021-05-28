import Card from './../UI/Card.js';
import './Expenses.css';
import ExpensesFilter from '../NewExpense/ExpensesFilter.js';
import { useState } from 'react';
import ExpenseList from './ExpenseList.js';
import ExpensesChart from './ExpensesChart.js';

const Expenses = function(props) {
  const [filteredYear, setFilteredYear] = useState(null);

  const saveFilterHandler = function(year) {
    setFilteredYear(year);
  }

  const filteredExpenses = props.items.filter(expense => (
    expense.date.getFullYear().toString() === filteredYear ||
    filteredYear === null
  ));

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSaveFilter={saveFilterHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses;