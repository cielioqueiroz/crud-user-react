import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { WarningAmberRounded } from "@mui/icons-material";

const Modal = ({ closeModal, removeUsers, open }) => {
  return (
    <Dialog
      open={open}
      onClose={closeModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{ sx: { maxWidth: 440, width: "100%" } }}
    >
      <DialogTitle
        id="alert-dialog-title"
        sx={{ display: "flex", alignItems: "center", gap: 1.5, pb: 1 }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "#fee2e2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <WarningAmberRounded sx={{ color: "error.main" }} />
        </Box>
        Deletar usuário
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Esta ação não pode ser desfeita. Deseja realmente remover este usuário?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2.5, gap: 1 }}>
        <Button onClick={closeModal} variant="outlined" color="inherit">
          Cancelar
        </Button>
        <Button
          onClick={removeUsers}
          variant="contained"
          color="error"
          autoFocus
        >
          Excluir
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
