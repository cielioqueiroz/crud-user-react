import { Box } from "@mui/material";

function Home() {
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
          backgroundColor: "blue",
          height: "75%",
        }}
      >
        <ul>
          <li>
            <p>Ciélio Queiroz</p>
            <p>email@teste.com</p>
          </li>
        </ul>
      </div>
    </Box>
  );
}

export default Home;
