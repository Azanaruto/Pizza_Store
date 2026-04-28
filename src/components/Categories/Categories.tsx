import { Button } from "@mui/material";
import styles from "./categories.module.scss";
import { useTranslation } from "react-i18next";

interface propsCategories {
  scrollToSection:(str:string)=> void
}

const Categories = ({scrollToSection}:propsCategories) => {
  const {t} = useTranslation()
  return (
    <div className={styles.category}>
      <Button onClick={()=> scrollToSection('Пиццы')}>{t("CategoriesTitle.pizza")}</Button>
      <Button onClick={()=> scrollToSection('Закуски')}>{t("CategoriesTitle.snacks")}</Button>
      <Button onClick={()=> scrollToSection('Десерты')}>{t("CategoriesTitle.desert")}</Button>
      <Button onClick={()=> scrollToSection('Напитки')}>{t("CategoriesTitle.drinks")}</Button>
    </div>
    
  );
};

export default Categories;
