import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recommendation from '../components/Recommendation';

function Home() {

    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!description.trim() || !amount.trim()) return;
        await axios.post('http://localhost:3000/expenses', { description: description, amount: parseFloat(amount) })
            .then(() => {
                setDescription('');
                setAmount('');
            })
        fetchExpenses();
    };

    const [expenses, setExpenses] = useState([]);

    const fetchExpenses = async () => {
        try {
            const response = await axios.get('http://localhost:3000/expenses');
            setExpenses(response.data);
        } catch (error) {
            console.error('Error fetching expenses:', error);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-col p-8 bg-[#FFBBBB] rounded m-8">
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className='m-2 rounded p-2 border border-[#000] border-[2px]' />
                <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className='m-2 rounded p-2 border border-[#000] border-[2px]' />
                <button type="submit" className='m-2 rounded p-2 border border-[#000] border-[2px] bg-[#555] text-white'>Add Expense</button>
            </form>
            <div className='p-8 bg-[#FBB] m-8'>
                <h2>Expenses</h2>
                <ul>
                    {expenses.map((expense, index) => (
                        <li key={index}>
                            <span>{expense.description} </span>
                            <span> - ${expense.amount}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <Recommendation />
        </div>
    );
}

export default Home;
