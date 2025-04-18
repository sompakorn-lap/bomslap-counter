import { Icon } from "@iconify/react";

type NewCounterButtonProps = {
  newCounter: () => void;
};

function NewCounterButton({ newCounter }: NewCounterButtonProps) {
  return (
    <div className="w-60 h-60 grid border-3 border-gray-300 rounded-lg bg-[#222831] text-[#EEEEEE]">
      <button
        className="w-20 h-20 m-auto rounded-full bg-[#00ADB5]"
        onClick={newCounter}
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

export default NewCounterButton;
