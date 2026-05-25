import { createContext, useState, useEffect } from "react";
import supabase from "../api/supabase";

const UserContext = createContext();

const UserProvider =  ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getUsers() {
      const { data, error: fetchError } = await supabase
        .from("usuarios")
        .select("*");
      if (fetchError) {
        console.error("Erro ao buscar usuários:", fetchError);
        setError(fetchError);
      } else {
        setUsers(data ?? []);
      }
      setLoading(false);
    }
    getUsers();
  }, []);

  return(
    <UserContext.Provider value={{users, setUsers, loading, error}}>
      {children}
    </UserContext.Provider>
  )

}

export { UserProvider, UserContext }
