import { Box, Checkbox, TextField, Button, Alert } from "@mui/material";
import styles from "./contactForm.module.scss";
import { useEffect, useState } from "react";
import { pizzaStore } from "../../Zustand/Pizza_Store";

const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

interface ContactFormData {
  name: string;
  surName: string;
  telefone: string;
  email: string;
  content: string;
}

const inialObject = {
  name: "",
  surName: "",
  telefone: "",
  email: "",
  content: "",
};

const ContactForm = () => {
  const [contactForm, setContatForm] = useState<ContactFormData>(inialObject);
  const [error, setError] = useState("");
  const { contactPost, sucsess, clearSuc } = pizzaStore();
  const [checked, setChecced] = useState(false);

 const isDisabled =
  !contactForm.name.trim() ||
  !contactForm.email.trim() ||
  !contactForm.surName.trim() ||
  !contactForm.telefone.trim() ||
  !contactForm.content.trim() ||
  !checked;

  const handleSubmit = () => {
    setError("");
    if (isNaN(+contactForm.telefone)) {
      setError("Прошу написат номер коректно без букв и дефисов");
      return;
    }
    contactPost(contactForm);
    setContatForm(inialObject);
  };

  useEffect(() => {
    if (!sucsess) return;
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
    <form action="" className={styles.form}>
       <Box>
          {error && <Alert severity="error">{error}</Alert>}
          {sucsess && <Alert severity="success">{sucsess}</Alert>}
        </Box>
      <Box sx={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <TextField
          id="outlined-basic"
          value={contactForm.name}
          label="Имя"
          variant="outlined"
          onChange={(e) => {
            setContatForm((prev) => ({
              ...prev,
              name: e.target.value,
            }));
          }}
        />
        <TextField
          id="outlined-basic"
          label="Фамилия"
          value={contactForm.surName}
          variant="outlined"
          onChange={(e) => {
            setContatForm((prev) => ({
              ...prev,
              surName: e.target.value,
            }));
          }}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <TextField
          id="outlined-basic"
          label="Телефон"
          value={contactForm.telefone}
          variant="outlined"
          onChange={(e) => {
            setContatForm((prev) => ({
              ...prev,
              telefone: e.target.value,
            }));
          }}
        />
        <TextField
          id="outlined-basic"
          label="email"
          value={contactForm.email}
          variant="outlined"
          onChange={(e) => {
            setContatForm((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
        />
      </Box>
      <p className={styles.desc}>Вопрос</p>
      <textarea
        name=""
        id=""
        value={contactForm.content}
        className={styles.contactContent}
        onChange={(e) => {
          setContatForm((prev) => ({
            ...prev,
            content: e.target.value,
          }));
        }}
      ></textarea>
      <div className="">
        <Checkbox {...label} onChange={(e) => setChecced(e.target.checked)} />
        <span>Я согласен на обработку моих персональных данных*</span>
      </div>
      <Button variant="contained" disabled={isDisabled} onClick={handleSubmit}>
        Отправит
      </Button>
    </form>
  );
};

export default ContactForm;
