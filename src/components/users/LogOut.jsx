import './LogOut.css';
import { Link } from "react-router-dom";

export const LogOut = () => {
  return (
    <section className="logout-page">
      <h2>You have successfully logged out</h2>
      <h3>See you next time!</h3>
      <button>
        <Link to={`/users`}>
          <p>Back to login</p>
        </Link>
      </button>
    </section>
  );
};
