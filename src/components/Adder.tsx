import { Icon } from "@iconify/react";

type AdderProps = {
  addCounter: () => void;
};

function Adder({ addCounter }: AdderProps) {
  return (
    <div className="w-60 h-60 grid border-3 border-gray-300 rounded-lg overflow-hidden">
      <button
        className="w-20 h-20 m-auto rounded-full bg-indigo-500"
        onClick={addCounter}
      >
        <Icon
          className="m-auto"
          icon="material-symbols:add-2-rounded"
          width={45}
          height={45}
        />
      </button>
    </div>
  );
}

export default Adder;
