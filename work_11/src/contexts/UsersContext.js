import {
  useState,
  useEffect,
  createContext,
  useContext,
  Children
} from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState();

  const value = {
    users,
    setUsers
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
  return useContext(UserContext);
};

export { UserProvider, useUser };
