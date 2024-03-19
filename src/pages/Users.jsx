import { useState, useContext } from "react";

import { Box } from "@mui/material";
import { UserContext } from "../context/useUserContext";
import PageHeader from "../components/PageHeader";
import Form from "../components/Form";
import ActionButton from "../components/Button";
import TableContent from "../components/Table";
import Modal from "../components/Modal";

import supabase from "../api/supabase";

function Users() {
  const { users, setUsers } = useContext(UserContext);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [edit, setEdit] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    salario: 0,
    funcao: "",
    email: "",
    contato: "",
  });

  function clearFormData() {
    setFormData({
      name: "",
      salario: 0,
      funcao: "",
      email: "",
      contato: "",
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    alert("OK");
    console.log(formData);
    const { data, error, status } = await supabase
      .from("usuarios")
      .insert(formData);
    if (status === 201) {
      const newUser = { ...formData, status: "active" };
      setUsers([...users, newUser]);
    }

    clearFormData();

    closeForm();
  }

  async function handleUpdate(e) {
    e.preventDefault();
    console.log(formData);
    const { data, error } = await supabase
      .from("usuarios")
      .update(formData)
      .eq("id", id)
      .select();
  }

  function showForm() {
    setIsVisible(true);
  }

  function closeForm() {
    edit && setEdit(false);
    setIsVisible(false);
    clearFormData();
  }

  function callEditForm(user) {
    setId(user.id);
    setEdit(true);

    setFormData({
      name: user.name,
      salario: user.salario,
      funcao: user.funcao,
      email: user.email,
      contato: user.contato,
    });

    setIsVisible(true);
  }

  function openModal(id, name) {
    setId(id);
    setName(name);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function slicedUser(id) {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  }

  async function removeUser() {
    const { error } = await supabase.from("usuarios").delete().eq("id", id);
    if (error) {
      alert("Ops deu erro");
      closeModal();
      return;
    }
    alert(`Usuário ${name} excluido com Sucesso`);
    slicedUser(id);
    closeModal();
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

      <TableContent callEditForm={callEditForm} openModal={openModal} />

      {isVisible && (
        <Form
          toEdit={edit}
          onChangeValue={handleChange}
          onSubmitValue={edit ? handleUpdate : handleSubmit}
          formData={formData}
          closeForm={closeForm}
        />
      )}

      <Modal
        closeModal={closeModal}
        removeUsers={removeUser}
        open={showModal}
      />
    </Box>
  );
}

export default Users;
