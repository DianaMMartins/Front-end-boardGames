import { useContext } from "react";
import { UserContext } from "../../contexts/Users";

export const UserCard = ({ eachUser }) => {
  const { user, setUser } = useContext(UserContext);
  
  return (
    <li className="user-li" key={eachUser.name}>
      <h3>{eachUser.name}</h3>
      <img src={eachUser.avatar_url} alt="avatar" width="150vw" />
      <p>
        <button className="sign-in" onClick={()=>{
          setUser(eachUser.username)
        }}>Sign in</button>
      </p>
    </li>
  );
};
