import { useState } from "react";
import Button from "./Button";

export default function SavingForm({ onSetSavings }) {
  const [saving, setSaving] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSetSavings(saving);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Saving goal:</label>
      <input type="number" onChange={(e) => setSaving(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
}
