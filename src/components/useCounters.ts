import { useState } from "react";

function useCounters() {
  const [counts, setCounts] = useState([0]);

  function handleIncrease(index: number) {
    setCounts((prev) => prev.map((v, i) => (i === index ? v + 1 : v)));
  }

  function handleDecrease(index: number) {
    setCounts((prev) =>
      prev.map((v, i) => (i === index ? Math.max(0, v - 1) : v))
    );
  }

  function handleReset(index: number) {
    setCounts((prev) => prev.map((v, i) => (i === index ? 0 : v)));
  }

  function handleNewCounter() {
    setCounts((prev) => [...prev, 0]);
  }

  return {
    counts,
    handleIncrease,
    handleDecrease,
    handleReset,
    handleNewCounter,
  };
}

export default useCounters;
