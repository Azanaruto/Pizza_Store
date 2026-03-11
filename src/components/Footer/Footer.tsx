import logo from '../../assets/images/logof.png'
import styles from './footer.module.scss'
const Footer = () => {
  return (
     <footer>
         <img src= {logo} className= {styles.logo} alt="" />
     </footer>
  )
}

export default Footer
