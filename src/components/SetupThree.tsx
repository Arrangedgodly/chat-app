type SetupThreeProps = {
  bio: string;
  setBio: (bio: string) => void;
  location: string;
  setLocation: (location: string) => void;
  canSubmit: boolean;
  handleSubmit: () => void;
};

const SetupThree: React.FC<SetupThreeProps> = ({
  bio,
  setBio,
  location,
  setLocation,
  canSubmit,
  handleSubmit,
}) => {
  return (
    <div
      id="setup-three"
      className="carousel-item flex flex-col w-full items-center justify-center"
    >
      <div className="w-1/3 text-center">
        <label className="form-control w-full">
          <div className="label">Tell us a bit about yourself!</div>
          <textarea
            className="textarea textarea-bordered textarea-primary textarea-lg"
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </label>
        <label className="form-control w-full">
          <div className="label">Where are you located?</div>
          <input
            className="input-box"
            type="text"
            placeholder="Location"
            inputMode="numeric"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <div className="label-text-alt">Zip Code</div>
        </label>
        <a className="previous-button mx-2" href="#setup-two">
          Previous
        </a>
        <a
          className={canSubmit ? "input-button mx-2" : "disabled-button mx-2"}
          onClick={handleSubmit}
        >
          Save
        </a>
      </div>
    </div>
  );
};

export default SetupThree;
