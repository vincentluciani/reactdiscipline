import styles from './SuperButton.module.css'
import React from 'react'

const SuperButton = props => {

    return <button type={props.type} className={`${styles['button']} ${props.invalid && styles.invalid}`} onClick={props.onClick}>
        {props.children}
    </button>

}

export default SuperButton;