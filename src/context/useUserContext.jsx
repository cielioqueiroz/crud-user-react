import { createContext, useState, useEffect } from "react";
import supabase from "../api/supabase";

const UserContext = createContext();

const UserProvider =  ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await supabase.from("usuarios").select("*");
        setUsers(data);
      } catch (error) {
        console.error(error, "Erro ao buscar usuários");
      }
    }
    getUsers();
  }, []);

  return(
    <UserContext.Provider value={{users, setUsers}}>
      {children}
    </UserContext.Provider>
  )

}

export { UserProvider, UserContext }
