import { ReactNode, createContext } from "react";
import registerUser from "../utils/registerUser";

const UserContext = createContext(registerUser)

const UserProvider = ({ children }: { children: ReactNode }) => {
  return (
    <UserContext.Provider value={registerUser}>{children}</UserContext.Provider>
  );
};

export {UserProvider, UserContext}
