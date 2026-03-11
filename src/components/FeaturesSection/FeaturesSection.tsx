import { dataFeatureSection } from '../../data/data'
import FeatureCard from './FeatureCard'
import styles from './featuresSection.module.scss'

const FeaturesSection = () => {
  return (
    <div className= {styles.featuresSection} >
      <div className="container">
        <div className = {styles.content}>
          {dataFeatureSection.map(elem => (
            <FeatureCard  key={elem.id} title= {elem.title} image= {elem.image} subtitle= {elem.desc}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
