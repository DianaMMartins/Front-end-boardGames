import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/Users";
import "./NavBar.css";

export const NavBar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <nav className="nav">
      <div className="divisor"></div>
      <Link to={`/reviews`} className="link">
        <p id="border">Reviews</p>
      </Link>
      <div className="divisor"></div>
      <Link to={`/categories`} className="link">
        <p id="no-border">Categories</p>
      </Link>
      <div className="divisor"></div>
      {user.username !== "" ? (
        <button id="border" onClick={logout}>
          Log out
        </button>
      ) : (
        <Link to={`/users`} className="link">
          <p id="border">Log in</p>
        </Link>
      )}
      <div className="divisor"></div>
    </nav>
  );
};
