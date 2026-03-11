import { NewPizzas } from "../../data/data";
import Carts from "../Carts/Carts";
import styles from "./newProducts.module.scss";
const NewProducts = () => {
  return (
    <div className={styles.newProducts}>
       <Carts arr={NewPizzas}/>
    </div>
  );
};

export default NewProducts;
