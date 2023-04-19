import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();
export const UserProvider = (props) => {
  const [user, setUser] = useState({ username: "" });
  const logout = () => {
    setUser({username: ""});
  };
  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};
