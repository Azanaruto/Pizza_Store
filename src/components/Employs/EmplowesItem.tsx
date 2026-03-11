import styles from './emplowes.module.css'
const EmplowesItem = ({name,position,image}) => {
  return (
    <div>
        <p className= {styles.nameEmplowes}>{name}</p>
        <p className= {styles.positionEmplowes}>{position}</p>
        <img src= {image} alt="image" className= {styles.emplowesImage} />
    </div>
  )
}

export default EmplowesItem
