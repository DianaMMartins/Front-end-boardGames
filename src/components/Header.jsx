import { NavBar } from "./NavBar";
import diceLogo from '../images/dice-logo-color.png'

export const Header = () => {
  return (
    <header className="Header">
      <img src={diceLogo} alt="logo" width='50vw'/>
      <h1>Board Game Reviews</h1>
      <NavBar />
    </header>
  );
};