import logo from "../../assets/images/logof.png";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonGroup } from "@mui/material";
const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="" />
      <nav>
        <Link to={"/"}>{t('header.menu')}</Link>
        <Link to={"/about"}>{t('header.about')}</Link>
        <Link to={"/contacts"}>{t('header.contact')}</Link>
        <ButtonGroup
          disableElevation
          variant="text"
          aria-label="Disabled button group"
        >
          <Button onClick={()=> changeLanguage('ru')}>Ru</Button>
          <Button onClick={()=> changeLanguage('kz')}>Kaz</Button>
        </ButtonGroup>
      </nav>
    </header>
  );
};

export default Header;
