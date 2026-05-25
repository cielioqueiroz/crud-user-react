import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import {
  AttachMoney,
  Close,
  Email,
  Person,
  Phone,
  Work,
} from "@mui/icons-material";

import { maskCurrencyBRL, parseCurrencyInput } from "../helpers/global";

function Form({ onChangeValue, onSubmitValue, formData, closeForm, toEdit }) {
  function handleSalarioChange(e) {
    const numericValue = parseCurrencyInput(e.target.value);
    onChangeValue({ target: { name: "salario", value: numericValue } });
  }

  return (
    <Dialog
      open
      onClose={closeForm}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          mx: { xs: 2, sm: 4 },
          width: "100%",
          maxWidth: 520,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 1,
        }}
      >
        {!toEdit ? "Cadastrar usuário" : "Atualizar usuário"}
        <IconButton onClick={closeForm} size="small">
          <Close />
        </IconButton>
      </DialogTitle>
      <form onSubmit={onSubmitValue}>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 1 }}
        >
          <TextField
            fullWidth
            label="Nome"
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={onChangeValue}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person fontSize="small" sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Salário"
            type="text"
            name="salario"
            inputMode="numeric"
            placeholder="R$ 0,00"
            value={maskCurrencyBRL(formData.salario)}
            onChange={handleSalarioChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AttachMoney
                    fontSize="small"
                    sx={{ color: "text.secondary" }}
                  />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Função"
            type="text"
            name="funcao"
            autoComplete="organization-title"
            value={formData.funcao}
            onChange={onChangeValue}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Work fontSize="small" sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="E-mail"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={onChangeValue}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email fontSize="small" sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Contato"
            type="tel"
            name="contato"
            autoComplete="tel"
            value={formData.contato}
            onChange={onChangeValue}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone fontSize="small" sx={{ color: "text.secondary" }} />
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2.5, gap: 1 }}>
          <Button
            type="button"
            onClick={closeForm}
            variant="outlined"
            color="inherit"
          >
            Cancelar
          </Button>
          <Button type="submit" variant="contained">
            {!toEdit ? "Cadastrar" : "Atualizar"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default Form;
