import { useState } from "react";
import { UserCard } from "./UserCard";
import { useEffect } from "react";
import { getUsers } from "../../utils.js/apiCalls";
import { useContext } from "react";
import { UserContext } from "../../contexts/Users";

export const Users = () => {
//   const { user, setUser } = useContext(UserContext);
//   const { logout } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((usersData) => {
      setUsers(usersData);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="users">
      <h2>Log in</h2>
      {isLoading ? (
        <img
          src={require(`../../images/loading.gif`)}
          alt="loading"
          width="250vw"
        />
      ) : (
        <ul>
          {users.map((eachUser) => {
            return <UserCard eachUser={eachUser} key={eachUser.name} />;
          })}
        </ul>
      )}
    </section>
  );
};
