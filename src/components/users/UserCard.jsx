import { useContext } from "react";
import { UserContext } from "../../contexts/Users";
import "./UserCard.css";

export const UserCard = ({ eachUser }) => {
  const { setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser(eachUser.username);
  };

  return (
    <li className="user-li" key={eachUser.name}>
      <section className="login-card" onClick={handleClick}>
      
        <section className="user-info ">
          <h3>{eachUser.name}</h3>

          <section className="user-image-container">
            <img src={eachUser.avatar_url} alt="avatar" />
          </section>
        </section>

        <section className="button-section">
          <button className="sign-in" >
            Sign in
          </button>
        </section>
      </section>
    </li>
  );
};
