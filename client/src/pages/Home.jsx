import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import Recommendation from '../components/Recommendation';

function Home() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="home">
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      <Recommendation expenses={expenses} />
    </div>
  );
}

export default Home;
