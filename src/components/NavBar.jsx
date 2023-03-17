import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
  <nav className="Nav">
    <Link to={`/reviews`} className='Link'>
    <p>Reviews</p>
    </Link>
    <Link to={`/categories`} className='Link'>
    <p>Categories</p>
    </Link>

    {/* if logged in display log out, if not logged in display log in */}
    <Link to={`/users`} className='Link'>
    <p>Login</p>
    </Link>
  </nav>
  )
};