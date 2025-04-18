type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onReset: () => void;
};

function Counter({ count, onIncrease, onDecrease, onReset }: CounterProps) {
  return (
    <div className="w-60 h-60 p-2 grid grid-rows-[auto_1fr_auto] border-3 border-gray-300 bg-[#222831] text-[#EEEEEE] rounded-lg">
      <input
        className="w-full p-2 text-lg text-center text-[#EEEEEE] placeholder:text-[#EEEEEE] focus:outline-0"
        placeholder="Counter"
      />
      <p className="w-full m-auto text-3xl text-center">{count}</p>
      <div className="grid grid-cols-2 gap-1">
        <button
          className="col-span-1 p-2 rounded text-xl bg-[#00ADB5]"
          onClick={onIncrease}
        >
          +
        </button>
        <button
          className="col-span-1 p-2 rounded text-xl bg-[#00ADB5]"
          onClick={onDecrease}
        >
          -
        </button>
        <button
          className="col-span-2 p-2 rounded text-xl bg-[#393E46]"
          onClick={onReset}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default Counter;
