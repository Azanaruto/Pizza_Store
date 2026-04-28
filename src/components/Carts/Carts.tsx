import { useTranslation } from 'react-i18next';
import FormModal from '../FormModal/FormModal';
import Modals from '../Modal/Modal';
import Cart from './Cart';
import styles from './Carts.module.scss'

interface propsCatrs {
    id: number,
    desc?: string,
    image:string,
    price: string,
    title:string
}

interface CartsProps {
    arr: propsCatrs[];
}
const Carts = ({arr}:CartsProps) => {
  const {t} = useTranslation()
  return (
    <div className="container">
      {
        <div className={styles.newCarts}>
          {arr.map((elem) => (
            <Cart key={elem.id} name={t(elem.title)} image={elem.image} elem = {elem} />
          ))}
        </div>
      }
        <Modals />
        <FormModal/>
    </div>
  );
};
export default Carts;
