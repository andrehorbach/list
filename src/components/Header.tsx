import styles from './Header.module.css'
import rocketLogo from '../assets/rocket-logo.svg'

export function Header() {
  return(
    <header className={styles.header}>
      <img src={rocketLogo} alt="Logotipo de Foguete"></img><span className={styles.titleTo}>to</span><span className={styles.titleDo}>do</span>
    </header>
  )
}