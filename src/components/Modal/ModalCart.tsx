import { ingredents } from "../../data/data"
import { pizzaStore } from "../../Zustand/Pizza_Store"
import styles from './Modal.module.scss'
const ModalCart = () => {
  const {isSelectedIngident,onSelectedIngident} = pizzaStore()

  return (
    <div className= {styles.carts}>
       {ingredents.map(elem => (
          <div className= {`${styles.cart} ${isSelectedIngident.some(piz => piz.id == elem.title ) ? styles.active : ''}`} 
          onClick={()=> onSelectedIngident({id:elem.title, price:elem.price})}>
            <img src= {elem.image} alt="image"  className= {styles.ingImage}/>
            <p className= {styles.ingTitle}>{elem.title}</p>
            <p className= {styles.ingprice}>{elem.price}</p>
          </div>
       ))}
    </div>
  )
}

export default ModalCart
