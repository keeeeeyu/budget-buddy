import Button from "./Button";
import { useState } from "react";

export default function ExpenseForm({ onSetExpenses }) {
  const [type, setType] = useState("");
  const [expense, setExpense] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newExpenses = {
      type,
      expense,
    };

    if (expense === 0 || type === "")
      return alert("Must select expense type and fill amount input");

    onSetExpenses(newExpenses);

    setType("");
    setExpense("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Type of Expenses:</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Select expense type</option>
        <option>Housing Expenses</option>
        <option>Utilities</option>
        <option>Transportation Expenses</option>
        <option>Food and Groceries</option>
        <option>Healthcare</option>
        <option>Personal Care</option>
        <option>Debt Payments</option>
        <option>Entertainment and Leisure</option>
        <option>Insurance</option>
      </select>
      <label>Expense:</label>
      <input
        type="number"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
      ></input>
      <Button>Add</Button>
    </form>
  );
}
