import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  buttonSet: {
    backgroundColor: "#312929",
    color: "#ffffff",
    "&:hover": {
      color: "#000000",
    },
  },
});

const Modal = ({ closeModal }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={closeModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Deletar usuário"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Deseja realmente remover este usuário?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cancelar</Button>
        <Button
          className={classes.buttonSet}
          onClick={() => alert("ola")}
          autoFocus
        >
          Excluir
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
