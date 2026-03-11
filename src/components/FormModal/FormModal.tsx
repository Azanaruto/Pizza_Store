import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { pizzaStore } from "../../Zustand/Pizza_Store";
import { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 2,
  p: 4,
};

const FormModal = () => {
  const { form, toggleForm, postForm, sucsess, clearSuc } = pizzaStore();
  const [error, setError] = useState("");
  const [adres, setAdres] = useState("");
  const [entrance, setEntrace] = useState("");
  const [etaj, setEtaj] = useState("");
  const [cvartira, setCvartira] = useState("");
  const [com, setCom] = useState("");
  const [tel, setTelefine] = useState("");

  const handleSubmit = () => {
    setError("");
    if (
      !adres.trim() ||
      !entrance.trim() ||
      !etaj.trim() ||
      !cvartira.trim() ||
      !tel.trim()
    ) {
      setError("Прошу полностью заполнит все поля !!!");
      return;
    }
    if (isNaN(+tel)) {
      setError("Прошу написат номер коректно без букв и дефисов");
      return;
    }

    postForm({
      adres,
      entrance,
      etaj,
      cvartira,
      com,
      tel,
    });
    setAdres("");
    setCom("");
    setEtaj("");
    setCvartira("");
    setEntrace("");
    setTelefine("");
  };

  useEffect(() => {
    if (sucsess) return;
    const interval = setTimeout(() => {
      clearSuc();
    }, 3000);
    return () => clearTimeout(interval);
  }, [sucsess, clearSuc]);

  useEffect(() => {
    if (!error) return;
    const interval = setTimeout(() => {
      setError("");
    }, 3000);
    return () => clearTimeout(interval);
  }, [error]);

  return (
    <Modal
      open={form}
      onClose={toggleForm}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        },
      }}
    >
      <Box
        sx={{
          ...style,

          padding: 5,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box>
          {error && <Alert severity="error">{error}</Alert>}
          {sucsess && <Alert security="success">{sucsess}</Alert>}
        </Box>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Форма для отправки
        </Typography>
        <TextField
          id="outlined-basic"
          label="Адрес"
          value={adres}
          variant="outlined"
          onChange={(e) => setAdres(e.target.value)}
        />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <TextField
            id="outlined-basic"
            label="Подьезд"
            variant="outlined"
            value={entrance}
            onChange={(e) => setEntrace(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Этаж"
            variant="outlined"
            value={etaj}
            onChange={(e) => setEtaj(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Квартира"
            variant="outlined"
            value={cvartira}
            onChange={(e) => setCvartira(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Номер Телефона"
            variant="outlined"
            value={tel}
            onChange={(e) => setTelefine(e.target.value)}
          />
        </Box>
        <TextField
          id="outlined-basic"
          label="Коментарии на адресу"
          variant="outlined"
          value={com}
          onChange={(e) => setCom(e.target.value)}
        />
        <Button
          variant="outlined"
          sx={{ color: "#33c9dc" }}
          onClick={handleSubmit}
        >
          Отправка
        </Button>
      </Box>
    </Modal>
  );
};

export default FormModal;
