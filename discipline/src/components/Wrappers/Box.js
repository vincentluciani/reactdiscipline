import styles from './Box.module.css'

function Box(props) {
    const classes = styles['mycommonclass'] + ' ' + props.className;
    return (
        <div className={classes} onClick={props.onClick}>{props.children}</div>
    );
}

export default Box;
