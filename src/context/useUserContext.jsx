import { createContext, useState, useEffect, useMemo } from "react";

import { supabase } from "../api/supabase";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await supabase.from("usuarios").select("*");

        setUsers(data);
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
