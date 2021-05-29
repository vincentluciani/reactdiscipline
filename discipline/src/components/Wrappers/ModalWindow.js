import SuperButton from '../Buttons/SuperButton'
import Box from './Box'
import styles from './ModalWindow.module.css'
import ReactDom from 'react-dom'
import React from 'react'

const BackDrop = props => {
    return <div className={styles['modal-window']} />
}

const Modal = props => {

    const onHide = () => {
        props.onConfirm();
    }
    return (
        <Box className={`${styles['modal-content']} ${props.className}`}>
            {props.children}
            <SuperButton onClick={onHide}>Close</SuperButton>
        </Box>
    )
}

const ModalWindow = props => {


    return (
        <React.Fragment>
            {ReactDom.createPortal(<BackDrop />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<Modal onConfirm={props.onConfirm} className={props.className}>{props.children}</Modal>, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

export default ModalWindow