import './Box.css'

function Box(props) {
    const classes = 'mycommonclass ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Box;
