import logo from '../../assets/images/logof.png'
import { Link } from 'react-router-dom'
import styles from './header.module.scss'
const Header = () => {
  return (
    <header  className= {styles.header}>
     <img src= {logo} className= {styles.logo} alt="" />
     <nav>
      <Link to={'/'}>Меню</Link>
      <Link to={'/about'}>О Нас</Link>
      <Link to={'/contacts'}>Контакты</Link>
     </nav>

    </header>
  )
}

export default Header
