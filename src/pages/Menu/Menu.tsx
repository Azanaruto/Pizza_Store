import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import NewProducts from "../../components/NewProducts/NewProducts";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Slider from "../../components/Slider/Slider";
import styles from "./menu.module.scss";
import { useRef } from "react";
import PizzaAll from "../../components/PizzaAll/PizzaAll";
import Categories from "../../components/Categories/Categories";
import DrinksAll from "../../components/DrinksAll/DrinksAll";
import SnacksAll from "../../components/SnacksAll/SnacksAll";
import DecertAll from "../../components/DecertAll/DecertAll";
const Menu = () => {
  const sectionRefc = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (category: string) => {
    const element = sectionRefc.current[category];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.content}>
            <h1 className={styles.titleMain}>
              Итальянский <span>вкус</span> и молниеносная <span>доставка</span>
            </h1>
            <img
              src="https://media.dodostatic.net/image/r:584x584/01995c6c934b756d9ffa69f3504fc150.avif"
              alt="pizza"
              className={styles.pizzaMain}
            />
          </div>
        </div>
      </main>
      <FeaturesSection />
      <div className="container">
        <SectionTitle
          title={"Наши"}
          subtitle={"Горячие Новинки"}
          desc={
            "Попробуйте уникальные вкусы этого сезона, которые мы разработалиспециально для истинных гурманов."
          }
        />
      </div>
      <NewProducts />
      <Slider />
      <Categories scrollToSection={scrollToSection} />
      <PizzaAll
        ref={(el) => {
          sectionRefc.current["Пиццы"] = el;
        }}
      />
      <DrinksAll
        ref={(el) => {
          sectionRefc.current["Напитки"] = el;
        }}
      />
      <SnacksAll
        ref={(el) => {
          sectionRefc.current["Закуски"] = el;
        }}
      />
      <DecertAll
        ref={(el) => {
          sectionRefc.current["Десерты"] = el;
        }}
      />
      <Slider/>
    </div>
  );
};

export default Menu;
