import { useState } from "react";
import { UserCard } from "./UserCard";
import { useEffect } from "react";
import { getUsers } from "../../utils.js/apiCalls";
export const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUsers().then((usersData) => {
      console.log(usersData);
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
            return (
                <UserCard eachUser={eachUser} key={eachUser.name}/>
            )
          })}
        </ul>
      )}
    </section>
  );
};
