import Button from "./Button";
import { useState } from "react";

export default function ExpenseForm() {
  const [type, setType] = useState("");
  const [expense, setExpense] = useState(0);

  const newExpenses = {
    type,
    expense,
  };

  return (
    <form>
      <label>Type of Expenses</label>
      <select>
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
      <label>Amount</label>
      <input type="number" value=""></input>
      <Button>Add</Button>
    </form>
  );
}
