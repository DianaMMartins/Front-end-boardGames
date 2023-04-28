import { Link } from "react-router-dom";
import "./LogOut.css";

export const LogOut = () => {
  return (
    <section className="logout-page">
      <h2>You have successfully logged out</h2>
      <h3>See you next time!</h3>
      <Link to={`/users`}>
        <button>
          <p>Back to login</p>
        </button>
      </Link>
    </section>
  );
};
