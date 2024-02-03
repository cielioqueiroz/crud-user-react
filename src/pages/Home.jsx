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
import { useEffect, useState } from "react";

function Home() {
  const [usuario, setUsuario] = useState(0);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    return countUsers();
  }, [usuario]);

  useEffect(() => {
    return countActiveUsers();
  }, [status]);

  const usuarios = [
    {
      id: "1",
      name: "Cielio Queiroz",
      salario: "R$ 4.000,00",
      funcao: "Software Developer Jr",
      email: "cielio@teste.com",
      contato: "94987653156",
      status: "inactive",
    },
    {
      id: "2",
      name: "Alice Queiroz",
      salario: "R$ 8.000,00",
      funcao: "Médica Ortopedista",
      email: "alice@teste.com",
      contato: "94987653156",
      status: "active",
    },
    {
      id: "3",
      name: "Bruna Queiroz",
      salario: "R$ 5.000,00",
      funcao: "Administradora de Empresas",
      email: "bruna@teste.com",
      contato: "94987653156",
      status: "active",
    },
    {
      id: "4",
      name: "Davi Queiroz",
      salario: "R$ 5.000,00",
      funcao: "Sotware Enginer",
      email: "davi@teste.com",
      contato: "94987653156",
      status: "active",
    },
  ];

  function countUsers() {
    setUsuario(usuarios.length);
  }

  function countActiveUsers() {
    const activeUsers = usuarios.filter(
      (usuario) => usuario.status === "active"
    );
    setStatus(activeUsers.length);
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
        <h2
          style={{
            padding: "40px 0",
            fontSize: "2rem",
          }}
        >
          Painel de Usuários
        </h2>
        <p>
          Gerenciador de contas, aqui estão todos os usuários da plataforma.
        </p>
      </div>
      <div
        style={{
          height: "75%",
        }}
      >
        <div>
          <div>
            <p>
              Total de Usuários: <span>{usuario}</span>
            </p>
          </div>
          <div>
            <p>
              Total de Salários: <span>R$ 22.000,00</span>
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
              {usuarios.map((usuario) => (
                <TableRow
                  key={usuario.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {usuario.name}
                  </TableCell>
                  <TableCell align="left">{usuario.salario}</TableCell>
                  <TableCell align="left">{usuario.funcao}</TableCell>
                  <TableCell align="left">{usuario.email}</TableCell>
                  <TableCell align="left">{usuario.contato}</TableCell>
                  <TableCell align="left">{usuario.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
}

export default Home;
