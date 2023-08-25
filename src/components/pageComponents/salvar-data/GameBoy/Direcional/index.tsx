interface DirectionalProps {
  changeOption: () => void
}
export const Directional = ({changeOption}: DirectionalProps) => {
  return (
    <div className="grid grid-cols-3">
      <div className="w-7 h-7"></div>
      <button className="w-7 h-7 bg-darkGray rounded-t-md" type="button" onClick={changeOption}></button>
      <div className="w-7 h-7"></div>
      <div className="w-7 h-7 bg-darkGray rounded-l-md cursor-not-allowed"></div>
      <div className="w-7 h-7 bg-darkGray flex items-center justify-center">
        <div className="w-5 h-5 rounded-full border-solid border-1 border-grayBase bg-slate-600"></div>
      </div>
      <div className="w-7 h-7 bg-darkGray rounded-r-md cursor-not-allowed"></div>
      <div className="w-7 h-7"></div>
      <button className="w-7 h-7 bg-darkGray rounded-b-md" type="button" onClick={changeOption}></button>
      <div className="w-7 h-7"></div>
    </div>
  );
};
