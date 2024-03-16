import React from 'react';

function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <span>{expense.description}</span>
            <span>${expense.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
