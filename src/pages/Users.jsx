import { Box } from "@mui/material";
import PageHeader from "../components/PageHeader";
import { useState, useContext } from "react";
import supabase from "../api/supabase";
import Form from "../components/Form";
import ActionButton from "../components/Button";
import TableContent from "../components/Table";
import { UserContext } from "../context/useUserContext";
import Modal from "../components/Modal";

function Users() {
  const { users } = useContext(UserContext);

  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    salario: 0,
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
    alert("OK");
    console.log(formData);
    const { data, error } = await supabase.from("usuarios").insert(formData);

    setFormData({
      name: "",
      salario: 0,
      funcao: "",
      email: "",
      contato: "",
    });

    closeForm();
  }

  function showForm() {
    setIsVisible(true);
  }

  function closeForm() {
    console.log("closeForm");
    setIsVisible(false);
  }

  function callEditForm() {
    setIsVisible(true);
  }

  function openModal(){
    setShowModal(true);
  }

  function closeModal(){
    setShowModal(false);
  }

  return (
    <Box>
      <PageHeader
        title="Usuários"
        subtitle="Gerenciador de ações, aqui será realizadas as ações para o usuário."
      />
      <Box sx={{ padding: "20px 0" }}>
        <ActionButton action={showForm}>Cadastrar Usuário</ActionButton>
      </Box>

      <TableContent 
        callEditForm={callEditForm} 
        openModal={openModal}
      />

      {isVisible && (
        <Form
          onChangeValue={handleChange}
          onSubmitValue={handleSubmit}
          formData={formData}
          closeForm={closeForm}
        />
      )}

      {showModal && <Modal closeModal={closeModal} />}
      
    </Box>
  );
}

export default Users;
