import { handleEmailLogin } from "../lib/firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

type LoginProps = {
  loggedIn: boolean;
};

const Login: React.FC<LoginProps> = ({ loggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    handleEmailLogin(email, password);
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
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="divider">Or</div>
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Login;
