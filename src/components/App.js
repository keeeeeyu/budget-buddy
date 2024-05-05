import Income from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";
import SavingForm from "./SavingForm";
import BudgetOverview from "./BudgetOverview";
import { useState } from "react";

export default function App() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState([]);

  function handleSetIncome(inc) {
    setIncome(inc);
  }

  function handleSetExpenses(expense) {
    setExpenses((expenses) => [...expenses, expense]);
  }

  return (
    <>
      <h2>budget buddy</h2>
      <Income income={income} onSetIncome={handleSetIncome} />
      <ExpenseForm onSetExpenses={handleSetExpenses} />
      <SavingForm />
      <BudgetOverview income={income} expenses={expenses} />
    </>
  );
}
