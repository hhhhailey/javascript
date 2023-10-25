import { decrement } from "./helpers/decrement";
import { increment } from "./helpers/increment";

function removeItem<T>(arr: Array<T>, value: T): Array<T> {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

console.log("first");

const countValue = <HTMLSpanElement>document.querySelector("#count-value");
const incrementBtn = <HTMLButtonElement>(
  document.querySelector("#increment-btn")
);
const decrementBtn = <HTMLButtonElement>(
  document.querySelector("#decrement-btn")
);

const handleIncrementClick = () => {
  const currentValue = parseInt(countValue.innerText);
  countValue.innerText = increment(currentValue).toString();
};

const handleDecrementClick = () => {
  const currentValue = parseInt(countValue.innerText);
  countValue.innerText = decrement(currentValue).toString();
};

incrementBtn.addEventListener("click", handleIncrementClick);
decrementBtn.addEventListener("click", handleDecrementClick);
