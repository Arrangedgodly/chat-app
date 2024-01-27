import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Setup from "./components/Setup";
import Profile from "./components/Profile";
import Chats from "./components/Chats";
import Friends from "./components/Friends";
import Feed from "./components/Feed";
import { auth, checkUserData, getUserData } from "./lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [uid, setUid] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [setupComplete, setSetupComplete] = useState(false);
  const navigate = useNavigate();

  const handleSetupComplete = (uid: string) => {
    checkUserData(uid)
      .then((result) => {
        if (result) {
          setSetupComplete(true);
          getUserData(uid).then((userData) => {
            setUser(userData);
          });
        } else {
          setSetupComplete(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleAuthChange = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        handleSetupComplete(user.uid);
        setLoggedIn(true);
      } else {
        setUid(null);
        setLoggedIn(false);
      }
    });
  };

  useEffect(() => {
    handleAuthChange();
  }, []);

  useEffect(() => {
    if (loggedIn && !setupComplete) {
      navigate("/setup");
    }
  }, [loggedIn, setupComplete]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <Routes>
        <Route path="/login" element={<Login loggedIn={loggedIn} />} />
        <Route path="/signup" element={<Signup loggedIn={loggedIn} />} />
        <Route
          path="/setup"
          element={
            <Setup
              uid={uid}
              setupComplete={setupComplete}
              setSetupComplete={setSetupComplete}
            />
          }
        />
        <Route path="/profile" element={<Profile user={user} uid={uid} />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/" element={<Feed />} />
      </Routes>
    </>
  );
}

export default App;
