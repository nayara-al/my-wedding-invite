export const ControlButtons = () => {
  return (
    <div className="grid grid-cols-2 gap-1 bg-darkGray w-20 h-8 rounded-lg rotate-[-30deg]">
      <div className="flex justify-center items-center relative">
        <button
          type="submit"
          className="w-5 h-5 bg-aBButton rounded-xl"
        ></button>
        <span className="font-pressStart2P absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-white text-xs font-bold">
          a
        </span>
      </div>
      <div className="flex justify-center items-center relative">
        <div className="w-5 h-5 bg-aBButton rounded-xl"></div>
        <span className="font-pressStart2P absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-white text-xs font-bold">
          b
        </span>
      </div>
    </div>
  );
};
