type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onReset: () => void;
};

function Counter({ count, onIncrease, onDecrease, onReset }: CounterProps) {
  return (
    <div className="w-60 h-60 grid grid-rows-[auto_1fr_auto] border-3 border-gray-300 rounded-lg overflow-hidden">
      <input
        className="w-full p-2 text-lg text-center focus:outline-0"
        placeholder="Counter"
      />
      <p className="w-full m-auto text-3xl text-center">{count}</p>
      <div>
        <button
          className="w-1/2 p-2 text-lg bg-indigo-500"
          onClick={onIncrease}
        >
          +
        </button>
        <button
          className="w-1/2 p-2 text-lg bg-indigo-500"
          onClick={onDecrease}
        >
          -
        </button>
        <button
          className="w-full p-2 text-lg bg-indigo-500"
          onClick={onReset}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default Counter;
