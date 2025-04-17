import { createFileRoute } from "@tanstack/react-router";
import Counter from "../components/counter";
import Adder from "../components/Adder";
import useCounters from "../components/useCounters";

export const Route = createFileRoute("/")({
  component: Page,
});

function Page() {
  const { counts, handleIncrease, handleDecrease, handleReset, addCounter } = useCounters();

  return (
    <section>
      {counts.map((count, index) => (
        <Counter
          key={`counter-${index}`}
          count={count}
          onIncrease={() => handleIncrease(index)}
          onDecrease={() => handleDecrease(index)}
          onReset={() => handleReset(index)}
        />
      ))}
      <Adder addCounter={addCounter}/>
    </section>
  );
}

export default Page;
