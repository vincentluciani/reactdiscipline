import React from 'react'
import Navigation from './Navigation'
import styles from './Header.module.css'
//import Logo from './Logo'

const Header = () => {

    return <div className={styles['header']}>
        <Navigation />
    </div >
}
//<Logo />
export default Header;
