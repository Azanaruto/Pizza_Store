import { useTranslation } from "react-i18next";
import { dataFeatureSection } from '../../data/data'
import FeatureCard from './FeatureCard'
import styles from './featuresSection.module.scss'

const FeaturesSection = () => {
  const {t} = useTranslation()

  return (
    <div className= {styles.featuresSection} >
      <div className="container">
        <div className = {styles.content}>
          {dataFeatureSection.map(elem => (
            <FeatureCard  key={elem.id} title= {t(elem.title)} image= {elem.image} subtitle= {t(elem.desc)}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
