import { emloyesMap } from "../../data/data";
import styles from "./emplowes.module.css";
import EmplowesItem from "./EmplowesItem";
const Emloyes = () => {
  return (
    <div className={styles.employes}>
      <div className="container">
        <div className={styles.CartsImployes}>
          {emloyesMap.map((elem) => (
            <EmplowesItem
              name={elem.name}
              image={elem.image}
              position={elem.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Emloyes;
