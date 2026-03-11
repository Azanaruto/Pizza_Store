import { forwardRef } from "react";
import styles from './snacksAll.module.scss'
import Carts from "../Carts/Carts";
import { snacks } from "../../data/data";
const SnacksAll = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div>
      <h2 className={styles.title} ref={ref}>
        Закуски
      </h2>
      <Carts arr={snacks}/>
    </div>
  );
});

export default SnacksAll;
