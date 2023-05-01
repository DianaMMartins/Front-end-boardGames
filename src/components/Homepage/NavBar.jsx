import { Link } from "react-router-dom";
import { useContext } from "react";
import "./NavBar.css";
import { UserContext } from "../../contexts/Users";

export const NavBar = () => {
  const { user } = useContext(UserContext);

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
          <Link className="link" to={"/confirm"}>
            <button className="link">
              <p>Sign out</p>
            </button>
          </Link>
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
