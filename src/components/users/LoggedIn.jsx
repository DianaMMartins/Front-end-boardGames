import { useContext } from "react";
import { UserContext } from "../../contexts/Users";
export const LoggedIn = () => {
  const { user } = useContext(UserContext);

  return (
    <section className="log-in">
      <p>Logged in as: {user}</p>
    </section>
  );
};
