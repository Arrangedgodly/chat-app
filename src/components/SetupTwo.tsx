type SetupTwoProps = {
  setOrientation: (orientation: string) => void;
  setStatus: (status: string) => void;
};

const SetupTwo: React.FC<SetupTwoProps> = ({
  setOrientation,
  setStatus,
}) => {
  const handleOrientation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrientation(e.target.value);
  };

  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  return (
    <div
      id="setup-two"
      className="carousel-item flex flex-col w-full items-center justify-center"
    >
      <div className="w-1/3 text-center">
        <label className="form-control w-full">
          <div className="label">What's your sexual orientation?</div>
          <select
            className="select select-primary focus:select-accent my-2"
            onChange={handleOrientation}
          >
            <option disabled selected>
              Pick your sexual orientation
            </option>
            <option>Straight</option>
            <option>Gay</option>
            <option>Bi</option>
          </select>
        </label>
        <label className="form-control w-full">
          <div className="label">What's your relationship status?</div>
          <select
            className="select select-primary focus:select-accent my-2"
            onChange={handleStatus}
          >
            <option disabled selected>
              Pick your relationship status
            </option>
            <option>Single</option>
            <option>In a relationship</option>
            <option>Married</option>
            <option>Divorced</option>
            <option>Its complicated</option>
          </select>
        </label>
        <a className="input-button mx-2" href="#setup-one">
          Previous
        </a>
        <a className="input-button mx-2" href="#setup-three">
          Next
        </a>
      </div>
    </div>
  );
};

export default SetupTwo;
