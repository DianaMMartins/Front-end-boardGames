import { NavBar } from "./NavBar";
import diceLogo from "../images/dice-logo-color.png";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="site-link">
      <Link to={"/"}>
        <section className="header">
          <img className="logo" src={diceLogo} alt="logo"/>
          <h1>Board Game Reviews</h1>
        </section>
        <NavBar />
      </Link>
    </header>
  );
};
