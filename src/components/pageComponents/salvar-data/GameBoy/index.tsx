export const GameBoy = () => {
  return (
    <div className="bg-grayBase p-4">
      <div className="bg-darkGray p-4">
        <p className="text-white pb-4"> Casamento - Nayara e Victor</p>
        <fieldset>
          <legend>Save</legend>
          <div>
            <input type="radio" id="sim" name="confirm" value="sim" checked />
            <label htmlFor="sim">Sim</label>
          </div>
          <div>
            <input type="radio" id="nao" name="confirm" value="nao" />
            <label htmlFor="nao">Não</label>
          </div>
        </fieldset>
      </div>
      <div>
        <span>
            <div>
                <span className=""></span>
                <span></span>
                <span></span>
            </div>
            <div></div>
            <div></div>
        </span>
        <span>
          <span></span>
          <span></span>
        </span>
      </div>
    </div>
  );
};
