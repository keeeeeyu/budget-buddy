import Income from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";
import SavingForm from "./SavingForm";
import BudgetOverview from "./BudgetOverview";
import { useState, useEffect } from "react";

export default function App() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [savings, setSavings] = useState("");
  const [monthlySaving, setMonthlySaving] = useState("");

  useEffect(() => {
    const totalExpense = expenses
      ? expenses.reduce((acc, exp) => acc + exp.expense, 0)
      : 0;

    setMonthlySaving(income - totalExpense);
  }, [income, expenses]);

  function handleSetIncome(inc) {
    setIncome(inc);
  }

  function handleSetExpenses(expense) {
    setExpenses((expenses) => [...expenses, expense]);
  }

  function handleSetSavings(save) {
    setSavings(save);
  }

  return (
    <>
      <h2>budget buddy</h2>
      <Income income={income} onSetIncome={handleSetIncome} />
      <ExpenseForm onSetExpenses={handleSetExpenses} />
      <SavingForm onSetSavings={handleSetSavings} />
      <BudgetOverview
        income={income}
        expenses={expenses}
        savings={savings}
        monthlySaving={monthlySaving}
      />
    </>
  );
}
