export const ControlButtons = () => {
  return (
    <div className="grid grid-cols-2 gap-1 bg-darkGray w-24 h-12 rounded-lg rotate-[-30deg]">
      <div className="flex justify-center items-center relative">
        <button
          type="submit"
          className="w-7 h-7 bg-aBButton rounded-full"
        ></button>
        <span className="font-pressStart2P absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-white text-xs font-bold">
          a
        </span>
      </div>
      <div className="flex justify-center items-center relative">
        <div className="w-7 h-7 bg-aBButton rounded-full"></div>
        <span className="font-pressStart2P absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-white text-xs font-bold">
          b
        </span>
      </div>
    </div>
  );
};
