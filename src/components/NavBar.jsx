import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/Users";
import "./NavBar.css";

export const NavBar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <nav className="nav">
      <Link to={`/reviews`} className="Link">
        <p id="border">Reviews</p>
      </Link>
      <Link to={`/categories`} className="Link">
        <p id="no-border">Categories</p>
      </Link>
      {user.username !== "" ? (
        <button id="border" onClick={logout}>
          Log out
        </button>
      ) : (
        <Link to={`/users`} className="Link">
          <p id="border">Log in</p>
        </Link>
      )}
    </nav>
  );
};
