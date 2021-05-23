import styles from './HorizontalBar.module.css'

function HorizontalBar(props) {
    return (
        <div className={`${styles['horizontal-bar']} ${props.className}`} onClick={props.onClick}>{props.children}</div>
    );
}

export default HorizontalBar;