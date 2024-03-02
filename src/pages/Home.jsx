import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";
import supabase from "./../api/supabase";
import formater from "../helpers/global";
import Loading from "../components/Loading";
import TableContent from "../components/Table";

function Home() {
  const [usuario, setUsuario] = useState(0);
  const [status, setStatus] = useState(0);
  const [salario, setSalario] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    setLoading(true);
    const { data } = await supabase.from("usuarios").select("*");

    setUsers(data);
    countUsers(data.length);
    countActiveUsers(data);
    countSalario(data);
    setLoading(false);
  }

  function countUsers(total) {
    setUsuario(total);
  }

  function countActiveUsers(users) {
    const activeUsers = users.filter((usuario) => usuario.status === "active");
    setStatus(activeUsers.length);
  }

  function countSalario(salary) {
    const totalSalario = salary.reduce((acc, total) => acc + total.salario, 0);
    setSalario(formater(totalSalario));
  }
  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <div
        style={{
          height: "25%",
        }}
      >
        <PageHeader
          title="Painel de Usuários"
          subtitle="Gerenciador de contas, aqui estão todos os usuários da plataforma."
        />
      </div>
      <div
        style={{
          height: "75%",
        }}
      >
        {loading ? (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loading />
          </Box>
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                marginBottom: "30px",
                padding: "15px 20px 10px",
                borderRadius: "6px",
              }}
            >
              <div>
                <Typography variant="h6" gutterBottom>
                  Total de Usuários: <span>{usuario}</span>
                </Typography>
              </div>
              <div>
                <Typography variant="h6" gutterBottom>
                  Total de Salários: <span>{salario}</span>
                </Typography>
              </div>
              <div>
                <Typography variant="h6" gutterBottom>
                  Total de Usuários Ativos: <span>{status}</span>
                </Typography>
              </div>
            </Box>
            <TableContent users={users} />
          </>
        )}
      </div>
    </Box>
  );
}

export default Home;
