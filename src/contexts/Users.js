import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();
export const UserProvider = (props) => {
    const [user, setUser] = useState({username: ''})
    return <UserContext.Provider>{props.children}</UserContext.Provider>
}