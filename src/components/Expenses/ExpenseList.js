import './ExpenseList.css';
import ExpenseItem from './ExpenseItem.js';

const ExpenseList = function(props) {

  if (props.items.length === 0) {
    return <p>No expenses found.</p>
  }

  return (
    props.items.map(expense => (
      <ExpenseItem
        key={expense.id} 
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}
      />
  )));
}

export default ExpenseList;