import { TextField } from "@mui/material";
import { createUseStyles } from "react-jss";
import ActionButton from "./Button";
import { Close } from "@mui/icons-material";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    width: "500px",
    gap: 10,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 30,
    borderRadius: 6,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.233)",
  },
  buttonSet: {
    width: "100%",
    textAlign: "center",
    marginTop: "15px",
  },
  close: {
    position: "absolute",
    top: "15px",
    right: "15px",
    cursor: "pointer",
  },
});

function Form({ onChangeValue, onSubmitValue, formData, closeForm, toEdit }) {
  const classes = useStyles();

  return (
    <form className={classes.root} onSubmit={onSubmitValue}>
      <h2>{!toEdit ? "Formulário de Cadastro" : "Atualizar Usuário"}</h2>

      <Close className={classes.close} onClick={closeForm} />

      <TextField
        type="text"
        placeholder="Nome"
        value={formData.name}
        onChange={onChangeValue}
        name="name"
      />
      <TextField
        type="number"
        placeholder="Salario"
        value={formData.salario}
        onChange={onChangeValue}
        name="salario"
      />
      <TextField
        type="text"
        placeholder="Funcao"
        value={formData.funcao}
        onChange={onChangeValue}
        name="funcao"
      />
      <TextField
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={onChangeValue}
        name="email"
      />
      <TextField
        type="text"
        placeholder="Contato"
        value={formData.contato}
        onChange={onChangeValue}
        name="contato"
      />
      <div className={classes.buttonSet}>
        <ActionButton type="submit">
          {!toEdit ? "Cadastrar" : "Atualizar"}
        </ActionButton>
      </div>
    </form>
  );
}

export default Form;
