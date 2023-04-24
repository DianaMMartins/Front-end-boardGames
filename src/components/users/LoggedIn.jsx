import { Link } from "react-router-dom";
import "./LoggedIn.css";

export const LoggedIn = ({ user, onLogout }) => {
  return (
    <section className="loggedIn-page">
      {user.username === "" ? (
        <section>
          <h3>No user logged in</h3>
          <Link to={"/users"}>Click here to log in</Link>
        </section>
      ) : (
        <section>
          <h3>Logged in as {user.name}</h3>
          <button onClick={onLogout}>Log out!</button>
        </section>
      )}
    </section>
  );
};
