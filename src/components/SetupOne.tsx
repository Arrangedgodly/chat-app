const SetupOne = () => {
  return (
    <div
      id="setup-one"
      className="carousel-item flex flex-col w-full items-center justify-center"
    >
      <div className="w-1/3 text-center">
        <label className="form-control w-full">
          <div className="label">What should we call you?</div>
          <input className="input-box" type="text" placeholder="Display Name" />
        </label>
        <label className="form-control w-full">
          <div className="label">What's your birthday?</div>
          <input className="input-box" type="date" />
        </label>
        <label className="form-control w-full">
          <div className="label">What's your gender?</div>
          <select className="select my-2">
            <option disabled selected>
              Pick your gender
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>
        <a className="input-button" href="#setup-two">
          Next
        </a>
      </div>
    </div>
  );
};

export default SetupOne;
