import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/Users";
import "./ConfirmLogout.css";
import { useContext } from "react";

export const ConfirmLogout = () => {
  const { logout } = useContext(UserContext);

  return (
    <section className="confirm-page">
      <h2>Are you sure you want to sign out?</h2>
      <section className="buttons">
        <Link to={"/logout"}>
          <button onClick={logout}>Yes</button>
        </Link>
        <Link to={"/"}>
          <button>No</button>
        </Link>
      </section>
    </section>
  );
};
