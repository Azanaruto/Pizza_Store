import styles from "./featuresSection.module.scss";

interface propsFeature {
  image:string,
  title:string,
  subtitle:string
}

const FeatureCard = ({image,title,subtitle}:propsFeature) => {
  return (
    <div className={styles.featurecard}>
      <img src= {image} alt="" />
      <div className={styles.desc}>
        <h4 className={styles.featureTitle}>
            {title}
        </h4>
        <p className = {styles.featureSubTitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
