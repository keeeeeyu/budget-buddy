import Button from "./Button";

export default function SavingForm() {
  return (
    <form>
      <label>Saving goal:</label>
      <input type="number" value="" />
      <Button>Add</Button>
    </form>
  );
}
