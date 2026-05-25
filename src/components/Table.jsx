import { useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import {
  DeleteForever,
  EditNote,
  ToggleOff,
  ToggleOn,
} from "@mui/icons-material";

import formater from "../helpers/global";
import { UserContext } from "../context/useUserContext";

export default function TableContent({ callEditForm, openModal, toggleStatus }) {
  const { users } = useContext(UserContext);
  const { pathname } = useLocation();
  const onUsersPage = pathname === "/users";
  const colSpan = onUsersPage ? 7 : 6;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="tabela de usuários">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Salário</TableCell>
            <TableCell>Função</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Contato</TableCell>
            <TableCell>Status</TableCell>
            {onUsersPage && <TableCell align="right">Ações</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={colSpan}
                align="center"
                sx={{ py: 6, color: "text.secondary" }}
              >
                Nenhum usuário cadastrado ainda.
              </TableCell>
            </TableRow>
          ) : (
            users.map((usuario) => {
              const isActive = usuario.status === "active";
              return (
                <TableRow key={usuario.id}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: 500, color: "text.primary" }}
                  >
                    {usuario.name}
                  </TableCell>
                  <TableCell>{formater(usuario.salario)}</TableCell>
                  <TableCell>{usuario.funcao}</TableCell>
                  <TableCell>{usuario.email}</TableCell>
                  <TableCell>{usuario.contato}</TableCell>
                  <TableCell>
                    <Chip
                      label={isActive ? "Ativo" : "Inativo"}
                      size="small"
                      sx={{
                        backgroundColor: isActive ? "#dcfce7" : "#f1f5f9",
                        color: isActive ? "#15803d" : "#475569",
                      }}
                    />
                  </TableCell>
                  {onUsersPage && (
                    <TableCell align="right">
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          gap: 0.5,
                        }}
                      >
                        <Tooltip title="Editar" arrow>
                          <IconButton
                            size="small"
                            onClick={() => callEditForm(usuario)}
                            sx={{
                              color: "text.secondary",
                              "&:hover": {
                                color: "secondary.main",
                                backgroundColor: "#eef2ff",
                              },
                            }}
                          >
                            <EditNote fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip
                          title={
                            isActive ? "Desativar usuário" : "Ativar usuário"
                          }
                          arrow
                        >
                          <IconButton
                            size="small"
                            onClick={() => toggleStatus(usuario)}
                            sx={{
                              color: isActive ? "#10b981" : "#94a3b8",
                              "&:hover": {
                                color: isActive ? "#d97706" : "#10b981",
                                backgroundColor: isActive
                                  ? "#fef3c7"
                                  : "#dcfce7",
                              },
                            }}
                          >
                            {isActive ? (
                              <ToggleOn fontSize="small" />
                            ) : (
                              <ToggleOff fontSize="small" />
                            )}
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Excluir" arrow>
                          <IconButton
                            size="small"
                            onClick={() => openModal(usuario.id, usuario.name)}
                            sx={{
                              color: "text.secondary",
                              "&:hover": {
                                color: "error.main",
                                backgroundColor: "#fee2e2",
                              },
                            }}
                          >
                            <DeleteForever fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  )}
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
