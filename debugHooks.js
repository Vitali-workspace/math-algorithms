import { useState, useDebugValue } from 'react';

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  useDebugValue(`Count: ${count}`);

  function increment() {
    setCount(count + 1);
  }

  return [count, increment];
}

function App() {
  const [count, increment] = useCounter(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}