import Income from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";
import SavingForm from "./SavingForm";
import BudgetOverview from "./BudgetOverview";
import { useState } from "react";

export default function App() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);

  return (
    <>
      <h2>budget buddy</h2>
      <Income onSetIncome={setIncome} />
      <ExpenseForm onSetExpenses={setExpenses} />
      <SavingForm />
      <BudgetOverview income={income} />
    </>
  );
}
