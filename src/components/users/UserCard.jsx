import { useContext, useState } from "react";
import { UserContext } from "../../contexts/Users";

export const UserCard = ({ eachUser }) => {
  const { setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser(eachUser.username);
  };

  return (
          <li className="user-li" key={eachUser.name}>
          <h3>{eachUser.name}</h3>
          <img src={eachUser.avatar_url} alt="avatar" width="150vw" />
          <p>
            <button className="sign-in" onClick={handleClick}>
              Sign in
            </button>
          </p>
        </li>
  );
};
