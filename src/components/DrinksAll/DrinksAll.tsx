import { forwardRef } from "react";
import styles from "./drinksAll.module.scss";
import Carts from "../Carts/Carts";
import { drinks } from "../../data/data";
import { useTranslation } from "react-i18next";
const DrinksAll = forwardRef<HTMLDivElement>((_, ref) => {
  const {t} = useTranslation()
  return (
    <div>
      <h2 className={styles.title} ref={ref}>
        {t('CategoriesTitle.drinks')}
      </h2>
      <Carts arr={drinks}/>
    </div>
  );
});

export default DrinksAll;
