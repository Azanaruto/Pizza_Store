import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import slideOne from "../../assets/images/SliderImage/slide_one.jpg";
import slideTwo from "../../assets/images/SliderImage/slide_two.jpg";
import slideFree from "../../assets/images/SliderImage/slide_free.jpg";
import slideFour from "../../assets/images/SliderImage/slide_foo.jpg";
import styles from "./slider.module.scss";
const Slider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      modules={[Autoplay]}
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
      }}
      loop={true}
      className= {styles.box}
    >
      <SwiperSlide>
        {" "}
        <img src={slideOne} alt="pizza" className={styles.SlideImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideTwo} alt="pizza" className={styles.SlideImage} />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img src={slideFree} alt="pizza" className={styles.SlideImage} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slideFour} alt="pizza" className={styles.SlideImage} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
