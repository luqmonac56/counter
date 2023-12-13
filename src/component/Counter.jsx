import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
        <span>
          <input
            type="range"
            min="0"
            max="15"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />{" "}
          {step}
        </span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        {/* <span>Count: {count}</span> */}
        <span>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} ${count > 1 ? "days" : "day"} from today would be `
            : `${Math.abs(count)} ${
                count < -1 ? "days" : "day"
              } from today was be `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {count > 0 || step > 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
