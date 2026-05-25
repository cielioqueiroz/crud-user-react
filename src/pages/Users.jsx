import { toast } from "react-toastify";
import { Box } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useState, useContext } from "react";

import ActionButton from "../components/Button";
import Form from "../components/Form";
import Modal from "../components/Modal";
import PageHeader from "../components/PageHeader";
import TableContent from "../components/Table";
import { UserContext } from "../context/useUserContext";

import supabase from "../api/supabase";

const emptyFormData = {
  name: "",
  salario: 0,
  funcao: "",
  email: "",
  contato: "",
};

function Users() {
  const { users, setUsers } = useContext(UserContext);

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [edit, setEdit] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(emptyFormData);

  function clearFormData() {
    setFormData(emptyFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.salario === 0 ||
      formData.funcao === "" ||
      formData.email === "" ||
      formData.contato === ""
    ) {
      toast.warning("Por favor, preencha todos os campos!");
      return;
    }

    const existingUser = users.find((user) => user.email === formData.email);
    if (existingUser) {
      toast.warning("Usuário já cadastrado!");
      return;
    }

    const { data, error } = await supabase
      .from("usuarios")
      .insert(formData)
      .select()
      .single();
    if (error) {
      console.error("Erro ao cadastrar usuário:", error);
      toast.error(`Erro ao cadastrar: ${error.message}`);
      return;
    }
    setUsers([...users, data]);
    toast.success("Usuário cadastrado com sucesso!");
    clearFormData();
    closeForm();
  }

  async function handleUpdate(e) {
    e.preventDefault();
    const { error } = await supabase
      .from("usuarios")
      .update(formData)
      .eq("id", id)
      .select();
    if (error) {
      console.error("Erro ao atualizar usuário:", error);
      toast.error(`Erro ao atualizar: ${error.message}`);
      return;
    }
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...formData } : user
    );
    setUsers(updatedUsers);
    toast.success("Usuário atualizado com sucesso!");
    closeForm();
  }

  async function toggleUserStatus(user) {
    if (user.id === undefined || user.id === null) {
      console.error("Usuário sem id no estado local:", user);
      toast.error("Usuário sem identificador. Recarregue a página.");
      return;
    }

    const newStatus = user.status === "active" ? "inactive" : "active";
    const { data, error } = await supabase
      .from("usuarios")
      .update({ status: newStatus })
      .eq("id", user.id)
      .select();
    if (error) {
      console.error("Erro ao atualizar status:", error);
      toast.error(`Erro ao atualizar status: ${error.message}`);
      return;
    }
    if (!data || data.length === 0) {
      toast.warning("Nenhum usuário encontrado para atualizar.");
      return;
    }
    setUsers(
      users.map((u) => (u.id === user.id ? { ...u, status: newStatus } : u))
    );
    if (newStatus === "active") {
      toast.success(`${user.name} foi ativado.`);
    } else {
      toast.warning(`${user.name} foi desativado.`);
    }
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
      console.error("Erro ao excluir usuário:", error);
      toast.error(`Erro ao excluir: ${error.message}`);
      closeModal();
      return;
    }
    toast.error(`${name} foi excluído.`);
    slicedUser(id);
    closeModal();
  }

  return (
    <Box>
      <PageHeader
        title="Usuários"
        subtitle="Gerenciador de ações, aqui será realizadas as ações para o usuário."
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <ActionButton action={showForm} startIcon={<Add />}>
          Cadastrar Usuário
        </ActionButton>
      </Box>

      <TableContent
        callEditForm={callEditForm}
        openModal={openModal}
        toggleStatus={toggleUserStatus}
      />

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
