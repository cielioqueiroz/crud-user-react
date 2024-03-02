import { Box, Button } from "@mui/material";
import PageHeader from "../components/PageHeader";
import { useState } from "react";
import supabase from "../api/supabase";
import Form from "../components/Form";
import ActionButton from "../components/Button";

function Users() {
  const [isVisible, setIsVisible] = useState(true);
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
    const { data, error } = await supabase.from("usuarios").insert(formData);

    setFormData({
      name: "",
      salario: undefined,
      funcao: "",
      email: "",
      contato: "",
    });
  }

  function showForm() {
    setIsVisible(true);
  }

  return (
    <Box>
      <PageHeader
        title="Usuários"
        subtitle="Gerenciador de ações, aqui será realizadas as ações para o usuário."
      />
      <Box>
        <ActionButton action={showForm}>
          Cadastrar Usuário
        </ActionButton>
      </Box>

      {isVisible && (
        <Form
          onChangeValue={handleChange}
          onSubmitValue={handleSubmit}
          formData={formData}
        />
      )}
    </Box>
  );
}

export default Users;
