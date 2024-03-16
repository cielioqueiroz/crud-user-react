import { useState, useContext } from "react";

import { Box } from "@mui/material";

import { PageHeader } from "../components/PageHeader";
import { Form } from "../components/Form";
import { ActionButton } from "../components/Button";
import { TableContent } from "../components/Table";

import { UserContext } from "../context/useUserContext";
import { supabase } from "../api/supabase";

export const Users = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    salary: 0,
    func: "",
    email: "",
    contact: "",
  });

  const { users } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("OK");
    console.log(formData);

    const { data, error } = await supabase.from("usuarios").insert(formData);

    setFormData({
      name: "",
      salary: 0,
      func: "",
      email: "",
      contact: "",
    });

    closeForm();
  };

  const showForm = () => {
    setIsVisible(true);
  };

  const closeForm = () => {
    console.log("closeForm");
    setIsVisible(false);
  };

  return (
    <Box>
      <PageHeader
        title="Usuários"
        subtitle="Gerenciador de ações, aqui será realizadas as ações para o usuário."
      />
      <Box>
        <ActionButton action={showForm}>Cadastrar Usuário</ActionButton>
      </Box>

      <TableContent users={users} />

      {isVisible && (
        <Form
          onChangeValue={handleChange}
          onSubmitValue={handleSubmit}
          formData={formData}
          closeForm={closeForm}
        />
      )}
    </Box>
  );
};
