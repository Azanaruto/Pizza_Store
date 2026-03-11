import { create } from "zustand";
import axios from "axios";
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
  name: string;
  surName: string;
  telefone: string;
  email: string;
  content: string;
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
  clearSuc:()=> void;
  addSelectedid: (obj: PropsElem) => void;
  isSelectedIngident: ingridentSelec[];
  onSelectedIngident: (obj: ingridentSelec) => void;
  postForm: (obj: objForm) => void;
  contactPost : (obj:ContactFormData) =>  void;
}

export const pizzaStore = create<PizzaStore>((set) => ({
  loading: false,
  error: "",
  modal: false,
  sucsess:'',
  selectElem: null,
  form: false,
  isSelectedIngident: [],
  toggleModal: () => set((state) => ({ modal: !state.modal })),
  toggleForm: () => set((state) => ({ form: !state.form })),
    clearSuc: ()=> set({sucsess:''}),
  addSelectedid: (obj: PropsElem) =>
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
      sucsess:''
    });
    try {
        await axios.post('https://progectpizzas-default-rtdb.firebaseio.com/orders.json', obj)
      set({sucsess:'успешно'})
    } catch (err) {
          if (err instanceof Error)  {
            set({error:err.message})
          }
          else {
            set({error:'Not to Found'})
          }
    }
    finally {
      set({loading:false})
    }
  },
  contactPost: async (obj: ContactFormData) => {
    set({
      loading: true,
      error: "",
      sucsess:''
    });
    try {
        await axios.post('https://progectpizzas-default-rtdb.firebaseio.com/contact.json', obj)
      set({sucsess:'успешно'})
    } catch (err) {
          if (err instanceof Error)  {
            set({error:err.message})
          }
          else {
            set({error:'Not to Found'})
          }
    }
    finally {
      set({loading:false})
    }
  },
}));
