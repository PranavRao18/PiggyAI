import React, { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim() || !amount.trim()) return;
    addExpense({ description, amount: parseFloat(amount) });
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
