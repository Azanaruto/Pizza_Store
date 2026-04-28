import { useTranslation } from "react-i18next";
import Emloyes from "../../components/Employs/Emloyes";
import styles from "./about.module.scss";
const About = () => {
  const {t} = useTranslation()
  return (
    <div className={styles.about}>
      <div className="container">
        <h1 className= {styles.title}>{t("about.title")}</h1>
        <p className= {styles.desc}>
          {t("about.desc")}
        </p>
        <h3 className= {styles.title} style={{textAlign:'center'}}>{t("about.Employs")}</h3>
        <Emloyes/>
      </div>
    </div>
  );
};

export default About;
