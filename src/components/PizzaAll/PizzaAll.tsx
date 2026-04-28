import { forwardRef } from "react";
import { pizzas } from "../../data/data";
import Carts from "../Carts/Carts";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./pizzaAll.module.scss";
import { useTranslation } from "react-i18next";

const PizzaAll = forwardRef<HTMLDivElement>((_,ref) => {
  const {t} = useTranslation()
  return (
    <div className={styles.set}>
      <div className="container">
        <SectionTitle
          title={t('pizzaTitle')}
          subtitle={t('PizzasubTitle')}
          desc={
            t('PizzaDesc')
          }
        />
      </div>
        <h2 className= {styles.title} ref={ref}>{t('CategoriesTitle.pizza')}</h2>
     <Carts  arr={pizzas}/>
    </div>
  );
})

export default PizzaAll;
