import { Link, Route, Routes } from "react-router-dom";
import { Users } from "./users/Users";

export const NavBar = () => {
  return (
  <nav className="Nav">
    <Link to={`/reviews`}>
    <p>This will lead to reviews</p>
    </Link>
    <Link to={`/users`}>
    <p>this will lead to login users</p>
    </Link>
  </nav>
  )
};