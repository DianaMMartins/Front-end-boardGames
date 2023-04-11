import { useContext } from "react";
import { UserContext } from "../../contexts/Users";

export const UserCard = ({ eachUser }) => {
  const { user, setUser } = useContext(UserContext);
  
  console.log(user);
   //check if user is logged in
  //display different page depending on if logged in or not


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
