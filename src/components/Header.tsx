import { Link } from "react-router-dom";
import { handleLogout } from "../lib/firebase";
import { RxPerson } from "react-icons/rx";
import { IoIosChatbubbles } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { SlLogout } from "react-icons/sl";

type HeaderProps = {
  loggedIn: boolean;
};

const Header: React.FC<HeaderProps> = ({ loggedIn }) => {
  return (
    <div className="navbar bg-primary text-primary-content fixed top-0">
      <div className="navbar-start">
        <Link className="text-xl font-bold mx-2" to="/">
          <h1 className="text-xl font-bold mx-2">Chat App</h1>
        </Link>
      </div>
      {loggedIn ? (
        <div className="navbar-end menu menu-lg menu-horizontal">
          <li>
            <Link
              className="tooltip tooltip-bottom flex mx-2"
              to="/profile"
              data-tip="Profile"
            >
              <RxPerson />
            </Link>
          </li>
          <li>
            <Link
              className="tooltip tooltip-bottom flex mx-2"
              to="/chat"
              data-tip="Chats"
            >
              <IoIosChatbubbles />
            </Link>
          </li>
          <li>
            <Link
              className="tooltip tooltip-bottom flex mx-2"
              to="/friends"
              data-tip="Friends"
            >
              <FaUserFriends />
            </Link>
          </li>
          <li>
            <Link
              className="tooltip tooltip-bottom flex mx-2"
              to="/"
              data-tip="Logout"
              onClick={handleLogout}
            >
              <SlLogout />
            </Link>
          </li>
        </div>
      ) : (
        <div className="navbar-end">
          <Link
            className="btn btn-primary-content text-primary mx-2"
            to="/signup"
          >
            Sign Up
          </Link>
          <Link
            className="btn btn-secondary text-secondary-content mx-2"
            to="/login"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
