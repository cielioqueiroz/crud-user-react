import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
} from "@mui/material";
import React from "react";
import formater from "../helpers/global";
import { useLocation } from "react-router-dom";

export default function TableContent({ users }) {
  const { pathname } = useLocation();
  console.log(pathname);

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
                  <button onClick={() => alert(usuario.id)}>Editar</button>
                  <button onClick={() => alert(usuario.id)}>Excluir</button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
