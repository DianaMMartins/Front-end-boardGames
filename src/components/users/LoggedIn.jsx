import { Link } from "react-router-dom";
import { memo } from "react";
import "./LoggedIn.css";

export const LoggedIn = memo(({ user, onLogout }) => {
  console.log(user);
  return (
    <section className="loggedIn-page">
      {user.username === "" ? (
        <section>
          <h3>No user logged in</h3>
          <Link to={"/users"}>Click here to sign in</Link>
        </section>
      ) : (
        <section className="logged-user-card">
          <h3 id="logged-in-header">Welcome back {user.name}!</h3>
          <section className="image">
            <img src={user.avatar_url} alt="user" />
          </section>
          <Link to={"/logout"}>
            <button className="logout-button" onClick={onLogout}>
              Sign out
            </button>
          </Link>
        </section>
      )}
    </section>
  );
});
