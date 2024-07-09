import React, {useState} from 'react'

import styles from "./Navbar.module.css"
import { getImageUrl } from '../../utils'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
        <a href='/'>
            <img  src='/logo_taffan_white.svg' width="150px"/>
        </a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={
                menuOpen ? getImageUrl("navbar/close.svg") : getImageUrl("navbar/menu_icon_white.svg")
            } 
            alt='menu' 
            onClick={ toggleMenu }
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}
