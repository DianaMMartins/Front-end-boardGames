import { NavBar } from "./NavBar";
import diceLogo from "../images/dice-logo-color.png";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <img src={diceLogo} alt="logo" width="50vw" />
        <h1>Board Game Reviews</h1>
        <NavBar />
      </Link>
    </header>
  );
};
