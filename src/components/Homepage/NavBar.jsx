import { Link } from "react-router-dom";
import { useContext } from "react";
import "./NavBar.css";
import { UserContext } from "../../contexts/Users";

export const NavBar = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <nav className="nav">
      <div className="divisor"></div>
      <Link to={`/reviews`} className="link">
        <p>Reviews</p>
      </Link>
      <div className="divisor"></div>
      <Link to={`/categories`} className="link">
        <p>Categories</p>
      </Link>
      <div className="divisor"></div>
      {user.username !== "" ? (
        <section className="nav-logout">
          <button className="link" onClick={logout}>
            <Link className="link" to={"/logout"}>
              <p>Sign out</p>
            </Link>
          </button>
        </section>
      ) : (
        <Link to={`/users`} className="link">
          <p>Sign in</p>
        </Link>
      )}
      <div className="divisor"></div>
    </nav>
  );
};
