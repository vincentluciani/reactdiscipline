import SuperButton from '../Buttons/SuperButton'
import Box from './Box'
import styles from './ModalWindow.module.css'

const ModalWindow = props => {

    const onHide = () => {
        props.onConfirm();
    }
    return (
        <div onClick={onHide} className={styles['modal-window']}>
            <Box className={`${styles['modal-content']} ${props.className}`}>
                {props.children}
                <SuperButton onClick={onHide}>Close</SuperButton>
            </Box>

        </div>
    )
}

export default ModalWindow