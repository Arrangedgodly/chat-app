import { FcGoogle } from "react-icons/fc";
import { handleGoogleAuth } from "../lib/firebase";

const GoogleAuth = () => {
  return (
    <button className="google-button" onClick={handleGoogleAuth}>
      <FcGoogle className="mr-2" />
      Login with Google
    </button>
  );
};

export default GoogleAuth;
