import { Box, Paper, Typography } from "@mui/material";
import { ErrorOutline, Groups, Paid, TaskAlt } from "@mui/icons-material";
import { useContext } from "react";

import formater from "../helpers/global";
import Loading from "../components/Loading";
import PageHeader from "../components/PageHeader";
import TableContent from "../components/Table";
import { UserContext } from "../context/useUserContext";

function StatCard({ icon: Icon, label, value, bg, iconColor, accent }) {
  return (
    <Paper
      sx={{
        p: 2.5,
        borderLeft: "3px solid transparent",
        transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
          borderLeftColor: accent,
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 2,
            backgroundColor: bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon sx={{ color: iconColor, fontSize: 26 }} />
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography
            variant="overline"
            sx={{ color: "text.secondary", display: "block", lineHeight: 1.2 }}
          >
            {label}
          </Typography>
          <Typography variant="h5" sx={{ mt: 0.5 }}>
            {value}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

const pageHeaderProps = {
  title: "Painel de Usuários",
  subtitle: "Gerenciador de contas, aqui estão todos os usuários da plataforma.",
};

function Home() {
  const { users, loading, error } = useContext(UserContext);

  const totalUsers = users.length;
  const activeUsers = users.filter((u) => u.status === "active");
  const totalActive = activeUsers.length;
  const totalSalario = formater(
    activeUsers.reduce((acc, u) => acc + Number(u.salario || 0), 0)
  );

  if (loading) {
    return (
      <Box>
        <PageHeader {...pageHeaderProps} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 10,
          }}
        >
          <Loading />
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <PageHeader {...pageHeaderProps} />
        <Paper
          sx={{
            p: 6,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <ErrorOutline sx={{ fontSize: 56, color: "error.main" }} />
          <Typography variant="h6">Erro ao carregar usuários</Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ maxWidth: 420 }}
          >
            Não foi possível conectar ao servidor. Verifique sua conexão e a
            configuração do Supabase.
          </Typography>
        </Paper>
      </Box>
    );
  }

  return (
    <Box>
      <PageHeader {...pageHeaderProps} />
      <Box
        sx={{
          display: "grid",
          gap: 2,
          mb: 3,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
        }}
      >
        <StatCard
          icon={Groups}
          label="Total de Usuários"
          value={totalUsers}
          bg="#eef2ff"
          iconColor="#4f46e5"
          accent="#4f46e5"
        />
        <StatCard
          icon={Paid}
          label="Total de Salários"
          value={totalSalario}
          bg="#ecfdf5"
          iconColor="#059669"
          accent="#10b981"
        />
        <StatCard
          icon={TaskAlt}
          label="Usuários Ativos"
          value={totalActive}
          bg="#fef3c7"
          iconColor="#d97706"
          accent="#f59e0b"
        />
      </Box>
      <TableContent />
    </Box>
  );
}

export default Home;
