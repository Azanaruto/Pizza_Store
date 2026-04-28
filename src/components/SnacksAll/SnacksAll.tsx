import { forwardRef } from "react";
import styles from './snacksAll.module.scss'
import Carts from "../Carts/Carts";
import { snacks } from "../../data/data";
import { useTranslation } from "react-i18next";
const SnacksAll = forwardRef<HTMLDivElement>((_, ref) => {
  const {t} = useTranslation()
  return (
    <div>
      <h2 className={styles.title} ref={ref}>
         {t("CategoriesTitle.snacks")}
      </h2>
      <Carts arr={snacks}/>
    </div>
  );
});

export default SnacksAll;
