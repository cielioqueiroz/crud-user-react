import { createContext, useState, useEffect, useMemo } from "react";

import { supabase } from "../api/supabase";
import UserMapper from "../api/mappers/UserMapper";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await supabase.from("usuarios").select("*");

        const usersMapper = data.map(UserMapper.toDomain);

        setUsers(usersMapper);
      } catch (error) {
        console.error(error, "Erro ao buscar usuários");
      }
    };

    getUsers();
  }, []);

  const value = useMemo(
    () => ({
      users,
    }),
    [users]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
