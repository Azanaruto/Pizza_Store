import { forwardRef } from "react";
import styles from './desertAll.module.scss'
import Carts from "../Carts/Carts";
import { decert } from "../../data/data";
const DecertAll = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div>
      <h2 className={styles.title} ref={ref}>
        Десерты
      </h2>
      <Carts arr={decert}/>
    </div>
  );
});

export default DecertAll;
