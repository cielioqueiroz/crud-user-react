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

function Home() {
  const usuarios = [
    {
      id: "1",
      name: "Cielio Queiroz",
      email: "cielio@teste.com",
      contato: "94987653156",
      status: "active",
    },
    {
      id: "2",
      name: "Alice Queiroz",
      email: "alice@teste.com",
      contato: "94987653156",
      status: "active",
    },
    {
      id: "3",
      name: "Bruna Queiroz",
      email: "bruna@teste.com",
      contato: "94987653156",
      status: "active",
    },
    {
      id: "4",
      name: "Pedro Queiroz",
      email: "pedro@teste.com",
      contato: "94987653156",
      status: "active",
    },
  ];
  console.log(usuarios);
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
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
