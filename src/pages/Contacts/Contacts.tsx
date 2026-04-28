import { useTranslation } from "react-i18next";
import ContactForm from "../../components/ContactForm/ContactForm";
import styles from "./contacts.module.scss";
const Contacts = () => {
  const {t} = useTranslation()
  return (
    <div>
      <div className="container">
        <h1 className={styles.title}>{t('contacts.title')}</h1>
        <p className={styles.desc}>
            {t("contacts.desc")}
        </p>
         <ContactForm/>
      </div>
    </div>
  );
};

export default Contacts;
