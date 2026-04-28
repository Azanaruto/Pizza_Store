import { useTranslation } from "react-i18next"
import { ingredients } from "../../data/data"
import { pizzaStore } from "../../Zustand/Pizza_Store"
import styles from './Modal.module.scss'
const ModalCart = () => {
  const {isSelectedIngident,onSelectedIngident} = pizzaStore()
  const {t} = useTranslation()
  return (
    <div className= {styles.carts}>
       {ingredients.map(elem => (
          <div className= {`${styles.cart} ${isSelectedIngident.some(piz => piz.id == elem.title ) ? styles.active : ''}`} 
          onClick={()=> onSelectedIngident({id:elem.title, price:elem.price})}>
            <img src= {elem.image} alt="image"  className= {styles.ingImage}/>
            <p className= {styles.ingTitle}>{t(elem.title)}</p>
            <p className= {styles.ingprice}>{elem.price}</p>
          </div>
       ))}
    </div>
  )
}

export default ModalCart
