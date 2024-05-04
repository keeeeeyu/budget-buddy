import Button from "./Button";
import { useRef } from "react";

export default function Income({ onSetIncome }) {
  const inputRef = useRef(null);

  function handlerSubmit(e) {
    e.preventDefault();

    const curInputValue = inputRef.current.value;
    onSetIncome(Number(curInputValue));

    inputRef.current.value = 0;
  }

  return (
    <form onSubmit={handlerSubmit}>
      <label>Monthly Income</label>
      <input type="number" ref={inputRef} />
      <Button>Add</Button>
    </form>
  );
}
