import { Box } from "@mui/material";
import PageHeader from "../components/PageHeader";
import { useState } from "react";
import supabase from "../api/supabase";

function Users() {
  const [formData, setFormData] = useState({
    name: "",
    salario: undefined,
    funcao: "",
    email: "",
    contato: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    const { data, error } = await supabase
    .from('usuarios')
    .insert(formData)
  }

  return (
    <Box>
      <PageHeader
        title="Usuários"
        subtitle="Gerenciador de ações, aqui será realizadas as ações para o usuário."
      />
      <div>
        <form
          style={{
            display: "flex",
            width: "40%",
            gap: 3,
            flexDirection: "column",
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
          <input
            type="number"
            placeholder="Salario"
            value={formData.salario}
            onChange={handleChange}
            name="salario"
          />
          <input
            type="text"
            placeholder="Funcao"
            value={formData.funcao}
            onChange={handleChange}
            name="funcao"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          <input
            type="text"
            placeholder="Contato"
            value={formData.contato}
            onChange={handleChange}
            name="contato"
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </Box>
  );
}

export default Users;
