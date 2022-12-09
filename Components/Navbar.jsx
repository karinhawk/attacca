import Image from "next/image"
import Link from "next/link"
import Attacca from "../public/assets/attacca.png"
import styles from "../styles/Navbar.module.scss"

const Navbar = () => {

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__items}>
        <div className='logo-div'>
          <Image src={Attacca} height={20} />
        </div>
        <Link href="/Dashboard">
          <p className={styles.nav__item}>Dash</p>
        </Link>
        <Link href="/Playlists">
          <p className={styles.nav__item}>Playlists</p>
        </Link>
        <Link href="/Fun">
          <p className={styles.nav__item}>Fun</p>
        </Link>
        <Link href="/Account">
          <p className={styles.nav__item}>Account</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar