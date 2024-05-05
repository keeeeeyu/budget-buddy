export default function BudgetOverview({ income, expenses }) {
  return (
    <section>
      <h2>Budget Overview</h2>
      <article>
        <h3>Monthly Income</h3>
        {income && <span>${income}</span>}
      </article>
      <article>
        <h3>Monthly Expenses</h3>
        <ul>
          {expenses.map((expense) => (
            <li>
              <span>{expense.type}</span>
              <span>${expense.expense}</span>
            </li>
          ))}
        </ul>
      </article>
      <article>
        <h3>Monthly Saving</h3>

        <div>
          <span>Savings Goal:</span>
          <span>$700</span>
        </div>

        <div>
          <span>Savings:</span>
          <span>$500</span>
        </div>
      </article>
    </section>
  );
}
