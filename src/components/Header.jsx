import { NavBar } from "./NavBar";
import diceLogo from "../images/dice-logo-color.png";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <section className="site-link">
          <img src={diceLogo} alt="logo"/>
          <h1>Board Game Reviews</h1>
        </section>
        <NavBar />
      </Link>
    </header>
  );
};
