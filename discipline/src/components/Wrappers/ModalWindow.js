import SuperButton from '../Buttons/SuperButton'
import Box from './Box'
import styles from './ModalWindow.module.css'

const ModalWindow = props => {

    const hideHandler = () => {
        props.setVisible(false);
    }

    return (
        <div className={styles['modal-window']}>
            <Box className={`${styles['modal-content']} ${props.className}`}>
                {props.children}
                <SuperButton onClick={hideHandler}>Close</SuperButton>
            </Box>

        </div>
    )
}

export default ModalWindow