import { auth } from "../lib/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type LoginProps = {
  loggedIn: boolean;
};

const Login: React.FC<LoginProps> = ({ loggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleEmailLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
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
        <h1 className="text-4xl font-bold mb-6">Login</h1>
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
          <button
            className="input-button"
            onClick={handleEmailLogin}
          >
            Login
          </button>
          <div className="divider">Or</div>
          <button
            className="google-button"
            onClick={handleGoogleLogin}
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
