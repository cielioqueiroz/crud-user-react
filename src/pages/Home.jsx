import { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import PageHeader from "../components/PageHeader";
import formater from "../helpers/global";
import Loading from "../components/Loading";
import TableContent from "../components/Table";
import { UserContext } from "../context/useUserContext";

function Home() {
  const users = useContext(UserContext);

  function countActiveUsers(users) {
    const activeUsers = users.filter((usuario) => usuario.status === "active");
    return activeUsers.length;
  }

  function countSalario(users) {
    const totalSalario = users.reduce((acc, total) => acc + total.salario, 0);
    return formater(totalSalario);
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
        {!users.length ? ( // se usuário estiver vazio, exibe o loading
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
                  Total de Usuários: <span>{users.length}</span>
                </Typography>
              </div>
              <div>
                <Typography variant="h6" gutterBottom>
                  Total de Salários: <span>{countSalario(users)}</span>
                </Typography>
              </div>
              <div>
                <Typography variant="h6" gutterBottom>
                  Total de Usuários Ativos:{" "}
                  <span>{countActiveUsers(users)}</span>
                </Typography>
              </div>
            </Box>
            <TableContent users={users.reverse().slice(0, 4)} />
          </>
        )}
      </div>
    </Box>
  );
}

export default Home;
