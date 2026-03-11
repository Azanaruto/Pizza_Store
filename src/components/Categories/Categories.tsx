import { Button } from "@mui/material";
import styles from "./categories.module.scss";

interface propsCategories {
  scrollToSection:(str:string)=> void
}

const Categories = ({scrollToSection}:propsCategories) => {
  return (
    <div className={styles.category}>
      <Button onClick={()=> scrollToSection('Пиццы')}>Питцы</Button>
      <Button onClick={()=> scrollToSection('Закуски')}>Закуски</Button>
      <Button onClick={()=> scrollToSection('Десерты')}>Десерты</Button>
      <Button onClick={()=> scrollToSection('Напитки')}>Напитки</Button>
    </div>
    
  );
};

export default Categories;
