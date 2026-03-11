import styles from './emplowes.module.css'
interface propsEmployes {
  name:string;
  position:string;
  image:string
}
const EmplowesItem = ({name,position,image}:propsEmployes) => {

  return (
    <div>
        <p className= {styles.nameEmplowes}>{name}</p>
        <p className= {styles.positionEmplowes}>{position}</p>
        <img src= {image} alt="image" className= {styles.emplowesImage} />
    </div>
  )
}

export default EmplowesItem
