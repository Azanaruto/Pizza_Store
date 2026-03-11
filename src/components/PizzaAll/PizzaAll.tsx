import { forwardRef } from "react";
import { pizzas } from "../../data/data";
import Carts from "../Carts/Carts";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./pizzaAll.module.scss";

const PizzaAll = forwardRef<HTMLDivElement>((_,ref) => {
  return (
    <div className={styles.set}>
      <div className="container">
        <SectionTitle
          title={"Наше"}
          subtitle={"Классическое Меню"}
          desc={
            "  Мы используем только фермерские сыры и тесто на живой закваске, которое созревает 24 часа для идеального хруста."
          }
        />
      </div>
        <h2 className= {styles.title} ref={ref}>Пиццы</h2>
     <Carts  arr={pizzas}/>
    </div>
  );
})

export default PizzaAll;
