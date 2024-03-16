import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
} from "@mui/material";
import React, { useContext } from "react";
import formater from "../helpers/global";
import { useLocation } from "react-router-dom";
import supabase from "../api/supabase";
import { UserContext } from "../context/useUserContext";
import DeleteForever from "@mui/icons-material/DeleteForever";
import EditNote from "@mui/icons-material/EditNote";

export default function TableContent({ callEditForm }) {
  const { users, setUsers } = useContext(UserContext);
  const { pathname } = useLocation();

  function slicedUser(id) {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  }

  async function removeUser(id, name) {
    const { error } = await supabase.from("usuarios").delete().eq("id", id);
    if (error) {
      alert("Ops deu erro");
      return;
    }
    alert(`Usuário ${name} excluido com Sucesso`);
    slicedUser(id);
  }

  return (
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
            {pathname === "/users" && <TableCell align="left">Ações</TableCell>}
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
              <TableCell align="left">{formater(usuario.salario)}</TableCell>
              <TableCell align="left">{usuario.funcao}</TableCell>
              <TableCell align="left">{usuario.email}</TableCell>
              <TableCell align="left">{usuario.contato}</TableCell>
              <TableCell align="left">{usuario.status}</TableCell>
              {pathname === "/users" && (
                <TableCell align="left">
                  <EditNote onClick={callEditForm} />
                  <DeleteForever
                    onClick={() => removeUser(usuario.id, usuario.name)}
                  />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
