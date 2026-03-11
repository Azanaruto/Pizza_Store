import FormModal from '../FormModal/FormModal';
import Modals from '../Modal/Modal';
import Cart from './Cart';
import styles from './Carts.module.scss'
const Carts = ({arr}) => {
  return (
    <div className="container">
      {
        <div className={styles.newCarts}>
          {arr.map((elem) => (
            <Cart key={elem.id} name={elem.name} image={elem.image} elem = {elem} />
          ))}
        </div>
      }
        <Modals />
        <FormModal/>
    </div>
  );
};
export default Carts;
