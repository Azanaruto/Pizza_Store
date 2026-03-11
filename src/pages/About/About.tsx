import Emloyes from "../../components/Employs/Emloyes";
import styles from "./about.module.scss";
const About = () => {
  return (
    <div className={styles.about}>
      <div className="container">
        <h1 className= {styles.title}>О нас</h1>
        <p className= {styles.desc}>
           Обычно к нам заходят, чтобы просто перекусить. Кто-то увидел
          рекламу, кто-то просто проголодался. Для нас это — первый шаг к
          большому знакомству. Но мы строим не просто доставку еды. Наш проект —
          это история про вдохновение. Мы просыпаемся каждое утро с одной целью:
          довести хруст нашего теста на живой закваске до идеала. Для нас это не
          просто работа, а большое дело, в которое мы вкладываем душу, чтобы вы
          чувствовали вкус настоящей Италии в каждом кусочке.
        </p>
        <h3 className= {styles.title} style={{textAlign:'center'}}>Наши Содрудники</h3>
        <Emloyes/>
      </div>
    </div>
  );
};

export default About;
