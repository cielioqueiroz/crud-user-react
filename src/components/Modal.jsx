import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const Modal = ({ closeModal }) => {
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
        <Button onClick={() => alert("ola")} autoFocus>
          Excluir
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
