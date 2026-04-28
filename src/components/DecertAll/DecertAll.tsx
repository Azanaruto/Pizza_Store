import { forwardRef } from "react";
import styles from './desertAll.module.scss'
import Carts from "../Carts/Carts";
import { decert } from "../../data/data";
import { useTranslation } from "react-i18next";
const DecertAll = forwardRef<HTMLDivElement>((_, ref) => {
  const {t} = useTranslation()
  return (
    <div>
      <h2 className={styles.title} ref={ref}>
        {t('CategoriesTitle.desert')}
      </h2>
      <Carts arr={decert}/>
    </div>
  );
});

export default DecertAll;
