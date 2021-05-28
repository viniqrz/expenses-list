import ExpenseDate from './ExpenseDate.js';
import Card from './../UI/Card.js';
import './ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem = function(props) {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
  }

  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div onClick={clickHandler} className="expense-item__price">{props.amount}</div>
        </div>
    </Card>
  )
}

export default ExpenseItem;