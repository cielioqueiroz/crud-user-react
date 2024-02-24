import { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PageHeader from "../components/PageHeader";
import supabase from "./../api/supabase";
import formater from "../helpers/global";
import Loading from "../components/Loading";

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
            <div>
              <div>
                <p>
                  Total de Usuários: <span>{usuario}</span>
                </p>
              </div>
              <div>
                <p>
                  Total de Salários: <span>{salario}</span>
                </p>
              </div>
              <div>
                <p>
                  Total de Usuários Ativos: <span>{status}</span>
                </p>
              </div>
            </div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell align="left">Salário</TableCell>
                    <TableCell align="left">Função</TableCell>
                    <TableCell align="left">E-mail</TableCell>
                    <TableCell align="left">Contato</TableCell>
                    <TableCell align="left">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((usuario) => (
                    <TableRow
                      key={usuario.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {usuario.name}
                      </TableCell>
                      <TableCell align="left">
                        {formater(usuario.salario)}
                      </TableCell>
                      <TableCell align="left">{usuario.funcao}</TableCell>
                      <TableCell align="left">{usuario.email}</TableCell>
                      <TableCell align="left">{usuario.contato}</TableCell>
                      <TableCell align="left">{usuario.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </div>
    </Box>
  );
}

export default Home;
