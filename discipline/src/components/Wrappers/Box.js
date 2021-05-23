import styles from './Box.module.css'

function Box(props) {
    return (
        <div className={`${styles['mycommonclass']} ${props.className}`} onClick={props.onClick}>{props.children}</div>
    );
}

export default Box;
