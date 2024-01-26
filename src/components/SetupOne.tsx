type SetupOneProps = {
  displayName: string;
  setDisplayName: (displayName: string) => void;
  birthdate: string;
  setBirthdate: (birthdate: string) => void;
  setGender: (gender: string) => void;
};

const SetupOne: React.FC<SetupOneProps> = ({
  displayName,
  setDisplayName,
  birthdate,
  setBirthdate,
  setGender,
}) => {
  const handleDisplayName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayName(e.target.value);
  };

  const handleBirthdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthdate(e.target.value);
  };

  const handleGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  return (
    <div
      id="setup-one"
      className="carousel-item flex flex-col w-full items-center justify-center"
    >
      <div className="w-1/3 text-center">
        <label className="form-control w-full">
          <div className="label">What should we call you?</div>
          <input
            className="input-box"
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={handleDisplayName}
          />
        </label>
        <label className="form-control w-full">
          <div className="label">What's your birthday?</div>
          <input
            className="input-box"
            type="date"
            value={birthdate}
            onChange={handleBirthdate}
          />
        </label>
        <label className="form-control w-full">
          <div className="label">What's your gender?</div>
          <select
            className="select select-primary focus:select-accent my-2"
            onChange={handleGender}
          >
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
