import { createFileRoute } from "@tanstack/react-router";
import Counter from "../components/Counter";
import NewCounterButton from "../components/NewCounterButton";
import useCounters from "../components/useCounters";

export const Route = createFileRoute("/")({
  component: Page,
});

function Page() {
  const {
    counts,
    handleIncrease,
    handleDecrease,
    handleReset,
    handleNewCounter,
  } = useCounters();

  return (
    <section className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
      {counts.map((count, index) => (
        <Counter
          key={`counter-${index}`}
          count={count}
          onIncrease={() => handleIncrease(index)}
          onDecrease={() => handleDecrease(index)}
          onReset={() => handleReset(index)}
        />
      ))}
      <NewCounterButton newCounter={handleNewCounter} />
    </section>
  );
}

export default Page;
