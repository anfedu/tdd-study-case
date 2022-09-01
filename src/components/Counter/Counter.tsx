import React, { useState } from "react";

export interface CounterProps {
  description: string;
  defaultCount: number;
}

function Counter({ description, defaultCount }: CounterProps) {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);

  return (
    <div>
      <h2>
        DESC: {description} -- DC: {defaultCount}
      </h2>
      <label htmlFor="">
        Incrementor:{" "}
        <input
          type="number"
          value={incrementor}
          onChange={(event) => {
            setIncrementor(parseInt(event.target.value) || 1);
          }}
        />
      </label>
      <div style={{ marginTop: 20 }}>
        <button
          aria-label="Subtract from Counter"
          onClick={() => setCount(count - 1)}
          style={{
            background: "darkorange",
            borderRadius: "100%",
            width: 50,
            height: 50,
          }}
        >
          -
        </button>
        <span style={{ marginInline: 20 }}>Current Count: {count}</span>
        <button
          aria-label="Add to Counter"
          onClick={() => setCount(count + 1)}
          style={{
            background: "darkorange",
            borderRadius: "100%",
            width: 50,
            height: 50,
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
