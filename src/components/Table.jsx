import React from "react";
import { useLocation } from "react-router-dom";

import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
} from "@mui/material";

import { formatter } from "../helpers/global";

export const TableContent = ({ users }) => {
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
          {users.map(({ id, name, salary, func, email, contact, status }) => (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="left">{formatter(salary)}</TableCell>
              <TableCell align="left">{func}</TableCell>
              <TableCell align="left">{email}</TableCell>
              <TableCell align="left">{contact}</TableCell>
              <TableCell align="left">{status}</TableCell>

              {pathname === "/users" && (
                <TableCell align="left">
                  <button onClick={() => alert(id)}>Editar</button>
                  <button onClick={() => alert(id)}>Excluir</button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
