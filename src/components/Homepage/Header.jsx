import { NavBar } from "../Homepage/NavBar.jsx";
import logo from "../../images/friends.png";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="site-link">
      <Link to={"/"}>
        <section className="header">
          <img className="logo" src={logo} alt="logo" />
          <h1>
            Board Game <br /> Reviews
          </h1>
        </section>
      </Link>
      <NavBar />
    </header>
  );
};
