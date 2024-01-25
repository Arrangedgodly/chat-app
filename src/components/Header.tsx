import { Link } from "react-router-dom";

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
        <div className="navbar-end">
          <Link
            className="btn btn-primary-content text-primary mx-2"
            to="/profile"
          >
            Profile
          </Link>
          <Link
            className="btn btn-secondary text-secondary-content mx-2"
            to="/chats"
          >
            Chats
          </Link>
          <Link
            className="btn btn-accent text-accent-content mx-2"
            to="/friends"
          >
            Friends
          </Link>
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
