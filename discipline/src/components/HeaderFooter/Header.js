import React from 'react'
import SuperButton from '../Buttons/SuperButton'
import styles from './Header.module.css'
//import Logo from './Logo'

const Header = (props) => {

    const loginButtonClick = () => {
        props.loginAction(true);
    }
    const loginOffClick = () => {
        props.logoffAction(true);
    }
    return <div className={styles['header']}>
        <SuperButton onClick={loginButtonClick}>Login</SuperButton>
        <SuperButton onClick={loginOffClick}>Log off</SuperButton>
    </div >
}
//<Logo />
export default Header;
