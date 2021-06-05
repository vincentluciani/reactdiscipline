import React from 'react'
import Navigation from './Navigation'
import styles from './Header.module.css'
//import Logo from './Logo'

const Header = (props) => {

    return <div className={styles['header']}>
        <Navigation loginAction={props.loginAction} logoffAction={props.logoffAction} />
    </div >
}
//<Logo />
export default Header;
