import { useContext, useState, useEffect } from "react";
import { UserCard } from "./UserCard";
import { getUsers } from "../../utils.js/apiCalls";
import { UserContext } from "../../contexts/Users";
import { LoggedIn } from "./LoggedIn";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const { user, logout } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const matchingUser = users.find((ifUserIsSame) => ifUserIsSame.username === user);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.log("Error fetching users: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(users, user, "hello", matchingUser);

  return (
    <section className="users">
      {matchingUser ? (
        <LoggedIn user={matchingUser} onLogout={logout} />
      ) : (
        <section>
          <h2>Log in</h2>
          {isLoading ? (
            <img
              id="loading"
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
      )}
    </section>
  );
};
