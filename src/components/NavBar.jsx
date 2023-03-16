import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
  <nav className="Nav">
    <Link to={`/reviews`}>
    <p>This will lead to reviews</p>
    </Link>
    <Link to={`/users`}>
    <p>This will lead to login users</p>
    </Link>
  </nav>
  )
};