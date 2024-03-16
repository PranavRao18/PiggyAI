const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000; 
const allowedOrigins = ['http://localhost:5173'];

app.use(bodyParser.json());
app.use(cors({origin: allowedOrigins, credentials: true}));

let expenses = [
];

app.get('/expenses', (req, res) => {
  res.json(expenses);
});

app.post('/expenses', (req, res) => {
  const newExpense = req.body;
  console.log(newExpense);
  const desc = newExpense.description;
  const amt = newExpense.amount;
  expenses.push({description: desc, amount: amt});
  res.status(201).json(newExpense);
});

app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
