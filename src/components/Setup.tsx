import SetupOne from "./SetupOne";
import SetupTwo from "./SetupTwo";
import SetupThree from "./SetupThree";
import { useState, useEffect } from "react";

const Setup = () => {
  const [displayName, setDisplayName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [orientation, setOrientation] = useState("");
  const [status, setStatus] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    const allFieldsFilled = displayName !== "" && birthdate !== "" && gender !== "" && orientation !== "" && status !== "" && bio !== "" && location !== "";
    setCanSubmit(allFieldsFilled);
  }, [displayName, birthdate, gender, orientation, status, bio, location])

  return (
    <div className="main-container">
      <h1 className="text-3xl font-bold mb-6">
        First, we need some info about you!
      </h1>
      <div className="carousel w-full">
        <SetupOne
          displayName={displayName}
          setDisplayName={setDisplayName}
          birthdate={birthdate}
          setBirthdate={setBirthdate}
          setGender={setGender}
        />
        <SetupTwo 
          setOrientation={setOrientation}
          setStatus={setStatus}
        />
        <SetupThree
          bio={bio}
          setBio={setBio}
          location={location}
          setLocation={setLocation}
          canSubmit={canSubmit}
        />
      </div>
    </div>
  );
};

export default Setup;
