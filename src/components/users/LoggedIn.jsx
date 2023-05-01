import { Link } from "react-router-dom";
import { memo } from "react";
// import { ConfirmLogout } from './components/users/ConfirmLogout';
import "./LoggedIn.css";

export const LoggedIn = memo(({ user }) => {
  
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
          <Link to={"/confirm"}>
            <button className="logout-button">
              Sign out
            </button>
          </Link>
        </section>
      )}
    </section>
  );
});
