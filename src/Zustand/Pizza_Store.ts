import { create } from "zustand";
import axios from "axios";

const TOKEN = "8742302717:AAE2vI0jLvDNB5MbiJQ5gWNvNGLXVpa1gP0"; // Твой НОВЫЙ токен
const CHAT_ID = "808854366";

interface ingridentSelec {
  id: string;
  price: string;
}

interface PropsElem {
  id: number;
  title: string;
  image: string;
  desc?: string;
  price: string;
}

interface objForm {
  adres: string;
  entrance: string;
  etaj: string;
  cvartira: string;
  com: string;
  tel: string;
}

interface ContactFormData {
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  desc: string;
}

interface PizzaStore {
  loading: boolean;
  error: string;
  sucsess: string;
  modal: boolean;
  selectElem: PropsElem | null;
  form: boolean;
  toggleModal: () => void;
  toggleForm: () => void;
  clearSuc: () => void;
  addSelected: (obj: PropsElem) => void;
  isSelectedIngident: ingridentSelec[];
  onSelectedIngident: (obj: ingridentSelec) => void;
  postForm: (obj: objForm) => void;
  telgramContactPost: (obj: ContactFormData) => void;
  contactPost: (obj: ContactFormData) => void;
}

export const pizzaStore = create<PizzaStore>((set) => ({
  loading: false,
  error: "",
  modal: false,
  sucsess: "",
  selectElem: null,
  form: false,
  isSelectedIngident: [],
  toggleModal: () => set((state) => ({ modal: !state.modal })),
  toggleForm: () => set((state) => ({ form: !state.form })),
  clearSuc: () => set({ sucsess: "" }),
  addSelected: (obj: PropsElem) =>
    set(() => ({
      selectElem: obj,
      isSelectedIngident: [],
    })),
  onSelectedIngident: (obj: ingridentSelec) =>
    set((state) => {
      const toogle = state.isSelectedIngident.some((elem) => elem.id == obj.id);
      if (toogle) {
        return {
          isSelectedIngident: state.isSelectedIngident.filter(
            (elem) => elem.id !== obj.id,
          ),
        };
      } else {
        return {
          isSelectedIngident: [...state.isSelectedIngident, obj],
        };
      }
    }),
  postForm: async (obj: objForm) => {
    set({
      loading: true,
      error: "",
      sucsess: "",
    });
    try {
      await axios.post(
        "https://progectpizzas-default-rtdb.firebaseio.com/orders.json",
        obj,
      );
      set({ sucsess: "успешно" });
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err.message });
      } else {
        set({ error: "Not to Found" });
      }
    } finally {
      set({ loading: false });
    }
  },
  contactPost: async (obj: ContactFormData) => {
    set({
      loading: true,
      error: "",
      sucsess: "",
    });
    try {
      await axios.post(
        "https://progectpizzas-default-rtdb.firebaseio.com/contact.json",
        obj,
      );
      set({ sucsess: "успешно" });
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err.message });
      } else {
        set({ error: "Not to Found" });
      }
    } finally {
      set({ loading: false });
    }
  },
  telgramContactPost: async (obj: ContactFormData) => {
    try {
      set({
        loading: true,
        error: "",
      });
      const message = `
<b>🚀 Новая заявка!</b>
-----------------------
<b>👤 Имя:</b> ${obj.firstName} ${obj.lastName}
<b>📞 Тел:</b> <code>${obj.phone}</code>
<b>📧 Email:</b> ${obj.email}
<b>💬 Коммент:</b> ${obj.desc || "Пусто"}
  `;
      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      });
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err.message });
      } else {
        set({ error: "Not to Found" });
      }
    } finally {
      set({ loading: false });
    }
  },
}));
