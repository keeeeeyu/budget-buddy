import Button from "./Button";
import { useState } from "react";

export default function Income({ income, onSetIncome }) {
  const [newIncome, setNewIncome] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSetIncome(newIncome);

    setNewIncome("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Monthly Income:</label>
      <input
        type="number"
        value={newIncome}
        onChange={(e) => setNewIncome(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
