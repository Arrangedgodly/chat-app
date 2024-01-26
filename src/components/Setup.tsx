import SetupOne from "./SetupOne";
import SetupTwo from "./SetupTwo";
import SetupThree from "./SetupThree";
import { useState, useEffect } from "react";
import { handleCreateUser } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

type SetupProps = {
  uid: string | null;
  setupComplete: boolean;
  setSetupComplete: (setupComplete: boolean) => void;
};

const Setup: React.FC<SetupProps> = ({
  uid,
  setupComplete,
  setSetupComplete,
}) => {
  const [displayName, setDisplayName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [orientation, setOrientation] = useState("");
  const [status, setStatus] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!uid) return;
    handleCreateUser(uid, {
      displayName,
      birthdate,
      gender,
      orientation,
      status,
      bio,
      location,
    })
      .then(() => setSetupComplete(true))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const allFieldsFilled =
      displayName !== "" &&
      birthdate !== "" &&
      gender !== "" &&
      orientation !== "" &&
      status !== "" &&
      bio !== "" &&
      location !== "";
    setCanSubmit(allFieldsFilled);
  }, [displayName, birthdate, gender, orientation, status, bio, location]);

  useEffect(() => {
    if (setupComplete) {
      navigate("/");
    }
  }, [setupComplete]);

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
        <SetupTwo setOrientation={setOrientation} setStatus={setStatus} />
        <SetupThree
          bio={bio}
          setBio={setBio}
          location={location}
          setLocation={setLocation}
          canSubmit={canSubmit}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Setup;
