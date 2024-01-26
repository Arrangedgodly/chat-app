import { useState, useEffect } from "react";
import { handleEmailSignup } from "../lib/firebase";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

type SignupProps = {
  loggedIn: boolean;
};

const Signup: React.FC<SignupProps> = ({ loggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    handleEmailSignup(email, password);
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/setup");
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
            className={
              password === confirmPass ? "input-box" : "input-box-error"
            }
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className={
              password === confirmPass ? "input-box" : "input-box-error"
            }
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
          <button className="input-button" onClick={handleSignup}>
            Signup
          </button>
          <div className="divider">Or</div>
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Signup;
