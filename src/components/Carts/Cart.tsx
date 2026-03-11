import { pizzaStore } from "../../Zustand/Pizza_Store";
import styles from "./Carts.module.scss";
import Button from "@mui/material/Button";

interface PropsElem {
  id: number;
  title: string;
  image: string;
  desc?: string;
  price: string;
}

interface propsProduct {
  name: string;
  image: string;
  elem: PropsElem;
}

const Cart = ({ name, image, elem }: propsProduct) => {
  const { toggleModal, addSelectedid } = pizzaStore();
  return (
    <div className={styles.newCard}>
      <div className={styles.wrapperImage}>
        <img
          src={image}
          alt={name}
          className={styles.NewcartImage}
          onClick={() => {
            toggleModal();
            addSelectedid(elem);
          }}
        />
      </div>
      <h4 className={styles.newCartTitle}>{name}</h4>
      <Button
        variant="text"
        className={styles.btn}
        sx={{ color: "#FF4D00;" }}
        onClick={() => {
          toggleModal();
          addSelectedid(elem);
        }}
      >
        {" "}
        Заказать
      </Button>
    </div>
  );
};

export default Cart;
