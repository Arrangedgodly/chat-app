import { useState, useEffect } from "react";
import { auth } from "../lib/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

type SignupProps = {
  loggedIn: boolean;
};

const Signup: React.FC<SignupProps> = ({ loggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignup = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleEmailSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  return (
    <div className="main-container">
      <div className="w-1/3">
        <h1 className="text-4xl font-bold mb-6">Sign Up</h1>
        <div className="flex flex-col">
          <input
            className="input-box"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-box"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="input-box"
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <button
            className="input-button"
            onClick={handleEmailSignup}
          >
            Signup
          </button>
          <div className="divider">Or</div>
          <button
            className="google-button"
            onClick={handleGoogleSignup}
          >
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
