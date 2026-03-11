import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./contacts.module.scss";
const Contacts = () => {
  return (
    <div>
      <div className="container">
        <h1 className={styles.title}>Контакты</h1>
        <p className={styles.desc}>
          Если у вас есть вопросы и предложения или вам нужна информация о
          заведении, вы можете легко связаться с нами.
        </p>
         <ContactForm/>
      </div>
    </div>
  );
};

export default Contacts;
