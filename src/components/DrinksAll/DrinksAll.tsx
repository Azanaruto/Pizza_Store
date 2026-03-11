import { forwardRef } from "react";
import styles from "./drinksAll.module.scss";
import Carts from "../Carts/Carts";
import { drinks } from "../../data/data";
const DrinksAll = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div>
      <h2 className={styles.title} ref={ref}>
        Напитки
      </h2>
      <Carts arr={drinks}/>
    </div>
  );
});

export default DrinksAll;
